const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://klaus:klaus123@hr-portal.kx5ek.mongodb.net/hr2?retryWrites=true&w=majority", {
      autoIndex: true
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
