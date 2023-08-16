const mongoose = require("mongoose");

const announcementSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, required: true },
  authorID: { type: mongoose.Types.ObjectId, ref: "User" },
  department: { type: String },
});

module.exports = mongoose.model("Announcement", announcementSchema);
