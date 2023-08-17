const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOLOCAL, {
      autoIndex: true
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
