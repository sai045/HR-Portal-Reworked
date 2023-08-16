const express = require("express");

const router = express.Router();
const employeeController = require("../Collectors/employeeController");

// 1. Get All Employees
// 2. Get Employee
// 3. Create New Employee
// 4. Delete Employee
router.get("/", employeeController.getAllEmployees);
router.get("/:id", employeeController.getEmployee);
router.post("/", employeeController.createEmployee);
router.delete("/:id", employeeController.deleteEmployee);

module.exports = router;
