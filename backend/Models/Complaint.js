const mongoose = require("mongoose");

const complaintSchema = mongoose.Schema({
  employeeID: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Employee",
  },
  date: { type: Date, required: true },
  category: { type: String },
  description: { type: String, required: true },
  status: { type: String, required: true },
});

module.exports = mongoose.model("Complaint", complaintSchema)