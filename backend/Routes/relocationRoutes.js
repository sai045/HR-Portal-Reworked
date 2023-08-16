const express = require("express");

const router = express.Router();
const relocationController = require("../Collectors/relocationController");
// 1. Get all leave requests
// 2. Create Leave Request
// 3. Update leave request status
router.get("/", relocationController.getAllRelocations);
router.post("/", relocationController.createRelocation);
router.patch("/:id", relocationController.confirmRelocationRequest);

module.exports = router;
