const express = require("express");
const { check } = require("express-validator");

const router = express.Router();
const complaintController = require("../Collectors/complaintController");

// 1. Get All Complaints
// 2. Add Complaint
// 3. Delete Complaint
router.get("/", complaintController.getAllComplaints);
router.post(
  "/",
  [check("description").not().isEmpty().withMessage("Description is required")],
  complaintController.createComplaint
);
router.delete("/:id", complaintController.deleteComplaint);

module.exports = router;
