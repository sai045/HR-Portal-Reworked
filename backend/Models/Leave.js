const mongoose = require("mongoose");

const leaveSchema = mongoose.Schema({
  employeeID: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Employee",
  },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  reason: { type: String },
  status: { type: Boolean, default: false },
});

module.exports = mongoose.model("Leave", leaveSchema);
