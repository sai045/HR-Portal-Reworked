const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const signup = async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    street,
    city,
    state,
    zipCode,
    password,
  } = req.body;
  bcrypt.hash(password, 10, async (err, hash) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    const newUser = new User({
      firstName,
      lastName,
      email,
      phoneNumber,
      password: hash,
      address: {
        street,
        city,
        state,
        zipCode,
      },
    });
    const existingUser = await User.findOne({ email }).exec();
    if (existingUser) {
      res.status(404).json({ message: "User Already Exists" });
      return;
    }

    await newUser
      .save()
      .then(() => {
        res.status(200).json({ message: "User Sucessfully added" });
      })
      .catch((err) => {
        res.status(404).json({ error: err });
      });
  });
};

const login = async (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({ message: "Auth Failed" });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({ message: "Auth Failed" });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user[0].email,
              name: user[0].lastName,
            },
            process.env.jwt_secret,
            {
              expiresIn: "1h",
            }
          );
          return res
            .status(200)
            .json({ message: "Auth Sucessfull", token: token });
        }
        res.status(401).json({ message: "Auth Failed" });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

const forgotpassword = async (req, res, next) => {
  const email = req.body.email;
  const existingUser = await User.findOne({ email }).exec();

  if (existingUser) {
    const secret = process.env.jwt_secret + existingUser.password;
    const payload = {
      email: existingUser.email,
      id: existingUser._id,
    };

    const token = jwt.sign(payload, secret, { expiresIn: "15m" });
    const link = `${process.env.domain}/resetPassword/${existingUser.id}/${token}`;

    const oAuth2Client = new google.auth.OAuth2(
      process.env.Client_ID,
      process.env.Client_secret,
      process.env.redirect_url
    );
    oAuth2Client.setCredentials({ refresh_token: process.env.refresh_token });

    async function sendMail() {
      try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transport = nodemailer.createTransport({
          service: "gmail",
          auth: {
            type: "OAuth2",
            user: process.env.USER,
            clientId: process.env.Client_ID,
            clientSecret: process.env.Client_secret,
            refreshToken: process.env.refresh_token,
            accessToken: accessToken,
          },
        });

        const mailOptions = {
          from: "saivarshith <saivarshith3041@gmail.com>",
          to: payload.email,
          subject: "Reset Link",
          text: `Reset link is ${link}`,
          html: `<a href=${link}>Click Here for reset</a>`,
        };

        const result = await transport.sendMail(mailOptions);
        return result;
      } catch (err) {
        return err;
      }
    }

    sendMail()
      .then((result) => {
        console.log("email sent", result);
      })
      .catch((err) => {
        console.log(err);
      });

    res.json({ link });
    console.log(link);
  } else {
    res.status(500).json({ message: "Email not registered" });
    return;
  }
};

const resetpassword = async (req, res, next) => {
  const { id, token } = req.params;

  const existingUser = await User.findOne({ _id: id }).exec();

  if (!existingUser) {
    res.json({ message: "Invalid Id" });
    return;
  }

  const secret = process.env.JWT_KEY + existingUser.password;
  try {
    const payload = jwt.verify(token, secret);
    const email = payload.email;
    const user = await User.findOne({ email }).exec();
    bcrypt.hash(req.body.password, 10, async (err, hash) => {
      if (err) {
        return res.status(500).json({ error: err });
      } else {
        user.password = hash;
        await user.save();
      }
    });
    res.json({ user });
  } catch (err) {
    res.status(401).json({ error: err });
  }
};

const getUserDetails = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email }).exec();
    if (!user) {
      res.status(404).json({ message: "User Not Found" });
      return;
    }
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.signup = signup;
exports.login = login;
exports.forgotpassword = forgotpassword;
exports.resetpassword = resetpassword;
exports.getUserDetails = getUserDetails