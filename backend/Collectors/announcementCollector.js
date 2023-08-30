const Announcement = require("../Models/Announcement");
const { validationResult } = require("express-validator");

const getAllAnnouncements = async (req, res, next) => {
  try {
    const announcements = await Announcement.find().exec();
    res.status(200).json({ announcements });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const createAnnouncement = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg); // Extract messages
    return res.status(400).json({ errors: errorMessages });
  }
  const { title, content, date, authorID, department } = req.body;
  const newAnnouncement = new Announcement({
    title,
    content,
    date,
    authorID,
    department,
  });

  try {
    newAnnouncement.save();
    res.status(200).json({ message: "Announcement Created" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getAllAnnouncements = getAllAnnouncements;
exports.createAnnouncement = createAnnouncement;
