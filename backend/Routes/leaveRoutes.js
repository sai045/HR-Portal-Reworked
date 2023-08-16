const express = require("express");

const router = express.Router();
const leaveController = require("../Collectors/leaveController");
// 1. Get all leave requests
// 2. Create Leave Request
// 3. Update leave request status
router.get("/", leaveController.getAllLeaves);
router.post("/", leaveController.createLeaves);
router.patch("/:id", leaveController.confirmLeaveRequest);

module.exports = router;
