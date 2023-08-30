const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zipCode: { type: Number },
  },
});

module.exports = User = mongoose.model("user", UserSchema);
