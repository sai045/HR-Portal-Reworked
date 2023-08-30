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
    check("title").not().isEmpty().withMessage("Title is required"),
    check("content").not().isEmpty().withMessage("Content is required"),
    check("date").not().isEmpty().withMessage("Date is required"),
    check("date").isDate().withMessage("Date must be valid"),
  ],
  announcementCollectors.createAnnouncement
);

module.exports = router;
