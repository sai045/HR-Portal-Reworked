const express = require("express");
const { check } = require("express-validator");

const router = express.Router();
const announcementCollectors = require("../Collectors/announcementCollector");
// 1. Get all announcements
// 2. Add new announcement
router.get("/", announcementCollectors.getAllAnnouncements);
router.post(
  "/",
  [
    check("title").not().isEmpty(),
    check("content").not().isEmpty(),
    check("date").not().isEmpty(),
    check("date").isDate(),
  ],
  announcementCollectors.createAnnouncement
);

module.exports = router;
