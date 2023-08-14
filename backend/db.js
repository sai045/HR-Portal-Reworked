const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      autoIndex: true
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
