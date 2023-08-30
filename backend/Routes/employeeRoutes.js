const express = require("express");
const { check } = require("express-validator");

const router = express.Router();
const employeeController = require("../Collectors/employeeController");

// 1. Get All Employees
// 2. Get Employee
// 3. Create New Employee
// 4. Delete Employee
router.get("/", employeeController.getAllEmployees);
router.get("/:id", employeeController.getEmployee);
router.post(
  "/",
  [
    check("firstName").not().isEmpty().withMessage("First name is required"),
    check("lastName").not().isEmpty().withMessage("Last name is required"),
    check("email").not().isEmpty().withMessage("Email is required"),
    check("email").isEmail().withMessage("Enter Valid Email"),
    check("phoneNumber")
      .not()
      .isEmpty()
      .withMessage("Phone Number is required"),
    check("phoneNumber")
      .isLength({ min: 10, max: 10 })
      .withMessage("Phone Number should contain 10 digits"),
    check("position").not().isEmpty().withMessage("Position is required"),
    check("department").not().isEmpty().withMessage("Department is required"),
  ],
  employeeController.createEmployee
);
router.delete("/:id", employeeController.deleteEmployee);

module.exports = router;
