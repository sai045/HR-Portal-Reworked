const mongoose = require("mongoose");

const complaintSchema = mongoose.Schema({
  employeeID: {
    type: mongoose.Types.ObjectId,
    ref: "Employee",
  },
  date: { type: Date, required: true },
  category: { type: String },
  description: { type: String },
  status: { type: String, required: true },
});

module.exports = mongoose.model("Complaint", complaintSchema);
