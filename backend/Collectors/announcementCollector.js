const Announcement = require("../Models/Announcement");

const getAllAnnouncements = async (req, res, next) => {
  try {
    const announcements = await Announcement.find().exec();
    res.status(200).json({ announcements });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const createAnnouncement = async (req, res, next) => {
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
