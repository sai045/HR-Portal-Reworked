const mongoose = require("mongoose");

const relocationSchema = mongoose.Schema({
  employeeID: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Employee",
  },
  requestDate: { type: Date, required: true },
  newAddress: {
    street: { type: String },
    city: { type: String },
    address: { type: String },
    zipCode: { type: Number },
  },
  reason: { type: String },
  status: { type: Boolean, default: false },
});

module.exports = mongoose.model("Relocation", relocationSchema);
