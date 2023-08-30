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
    check("firstName").not().isEmpty().withMessage("First Name is required"),
    check("lastName").not().isEmpty().withMessage("Last Name is required"),
    check("email").not().isEmpty().withMessage("Email is required"),
    check("email").isEmail().withMessage("Enter Valid email"),
    check("phoneNumber")
      .not()
      .isEmpty()
      .withMessage("Phone Number is required"),
    check("phoneNumber")
      .isLength({ min: 10, max: 10 })
      .withMessage("Enter Valid Phone number"),
    check("positionAppliedFor")
      .not()
      .isEmpty()
      .withMessage("Position is Required"),
    check("applicationDate").not().isEmpty(),
    check("applicationDate").isDate(),
    check("resume").not().isEmpty().withMessage("Resume is required"),
  ],
  applicantController.createApplicant
);
router.delete("/:id", applicantController.deleteApplicant);
router.patch("/schedule/:id", applicantController.scheduleApplicant);
router.get("/get/schedule", applicantController.getAllScheduledApplicants);

module.exports = router;
