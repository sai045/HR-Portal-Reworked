const express = require("express");
const { check } = require("express-validator");

const router = express.Router();
const leaveController = require("../Collectors/leaveController");
// 1. Get all leave requests
// 2. Create Leave Request
// 3. Update leave request status
router.get("/", leaveController.getAllLeaves);
router.post(
  "/",
  [
    check("employeeID").not().isEmpty().withMessage("EmployeeID is required"),
    check("startDate").not().isEmpty().withMessage("Start Date is required"),
  ],
  leaveController.createLeaves
);
router.patch("/:id", leaveController.confirmLeaveRequest);

module.exports = router;
