const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  position: { type: String, required: true },
  department: { type: String, required: true },
  joinDate: { type: Date },
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zipCode: { type: Number },
  },
  leaveRequests: [
    { type: mongoose.Types.ObjectId, required: true, ref: "Leave" },
  ],
  relocationRequests: [
    { type: mongoose.Types.ObjectId, required: true, ref: "Relocation" },
  ],
  complaints: [
    { type: mongoose.Types.ObjectId, required: true, ref: "Complaint" },
  ],
});

module.exports = mongoose.model("Employee", employeeSchema);
