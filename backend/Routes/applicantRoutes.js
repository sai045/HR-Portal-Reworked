const express = require("express");

const router = express.Router();
const applicantController = require("../Collectors/applicantController");
// routes
// 1. Get all Applicants
// 2. Get Applicant
// 3. Create Applicant
// 4. Delete Applicant
// 5. Schedule Applicant
// 6. Get all Scheduled Applicants
router.get("/", applicantController.getAllApplicants);
router.get("/:id", applicantController.getApplicant);
router.post("/", applicantController.createApplicant);
router.delete("/:id", applicantController.deleteApplicant);
router.patch("/schedule/:id", applicantController.scheduleApplicant);
router.get("/get/schedule", applicantController.getAllScheduledApplicants)

module.exports = router;
