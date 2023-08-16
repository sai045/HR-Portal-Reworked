const express = require("express");

const router = express.Router();
const announcementCollectors = require("../Collectors/announcementCollector");
// 1. Get all announcements
// 2. Add new announcement
router.get("/", announcementCollectors.getAllAnnouncements);
router.post("/", announcementCollectors.createAnnouncement);

module.exports = router;
