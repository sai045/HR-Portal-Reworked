const express = require("express");
const { check } = require("express-validator");

const router = express.Router();
const relocationController = require("../Collectors/relocationController");
// 1. Get all leave requests
// 2. Create Leave Request
// 3. Update leave request status
router.get("/", relocationController.getAllRelocations);
router.post(
  "/",
  [
    check("employeeID").not().isEmpty().withMessage("EmployeeID is required"),
    check("street").not().isEmpty().withMessage("Street is required"),
    check("city").not().isEmpty().withMessage("City is required"),
    check("state").not().isEmpty().withMessage("State is required"),
    check("zipCode").not().isEmpty().withMessage("Zip Code is required"),
  ],
  relocationController.createRelocation
);
router.patch("/:id", relocationController.confirmRelocationRequest);

module.exports = router;
