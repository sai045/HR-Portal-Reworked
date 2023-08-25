const express = require("express");
const { check } = require("express-validator");

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
router.post(
  "/",
  [
    check("firstName").not().isEmpty(),
    check("lastName").not().isEmpty(),
    check("email").not().isEmpty(),
    check("email").isEmail(),
    check("phoneNumber").not().isEmpty(),
    check("phoneNumber").isNumeric(),
    check("positionAppliedFor").not().isEmpty(),
    check("applicationDate").not().isEmpty(),
    check("applicationDate").isDate(),
    check("resume").not().isEmpty(),
  ],
  applicantController.createApplicant
);
router.delete("/:id", applicantController.deleteApplicant);
router.patch("/schedule/:id", applicantController.scheduleApplicant);
router.get("/get/schedule", applicantController.getAllScheduledApplicants);

module.exports = router;
