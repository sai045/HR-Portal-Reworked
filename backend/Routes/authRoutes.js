const express = require("express");
const { check } = require("express-validator");

const router = express.Router();
const authCollector = require("../Collectors/authCollector");
// routes
// 1. login
// 2. signup
// 3. forgot password
// 4. reset password
// 5. get user details
// 6. update user details
router.post(
  "/signup",
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
  ],
  authCollector.signup
);
router.post(
  "/login",
  check("email").not().isEmpty().withMessage("Email is required"),
  check("email").isEmail().withMessage("Enter Valid Email"),
  check("password").not().isEmpty().withMessage("Password is required"),
  authCollector.login
);
router.post("/forgotPassword", authCollector.forgotpassword);
router.post("/resetpassword", authCollector.resetpassword);
router.post("/getUserDetails", authCollector.getUserDetails);

module.exports = router;
