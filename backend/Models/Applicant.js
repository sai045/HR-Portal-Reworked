const mongoose = require("mongoose");

const applicationSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  positionAppliedFor: { type: String, required: true },
  applicationDate: { type: Date, required: true },
  resume: { type: String, required: true },
  schedule: {type: String, default:""}
});

module.exports = mongoose.model("Applicant", applicationSchema);
