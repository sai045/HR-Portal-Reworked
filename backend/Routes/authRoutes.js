const express = require("express");

const router = express.Router();
const authCollector = require("../Collectors/authCollector");
// routes
// 1. login
// 2. signup
// 3. forgot password
// 4. reset password
// 5. get user details
// 6. update user details
router.post("/signup", authCollector.signup);
router.post("/login", authCollector.login);
router.post("/forgotPassword", authCollector.forgotpassword);
router.post("/resetpassword", authCollector.resetpassword);
router.post("/getUserDetails", authCollector.getUserDetails)

module.exports = router;