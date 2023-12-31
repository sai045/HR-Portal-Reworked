const Leave = require("../Models/Leave");
const Employee = require("../Models/Employee");
const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const getAllLeaves = async (req, res, next) => {
  try {
    var leaves = await Leave.find().exec();
    leaves = leaves.filter((r) => r.status == false);
    res.status(200).json({ leaves });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

const createLeaves = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg); // Extract messages
    return res.status(400).json({ errors: errorMessages });
  }
  const { employeeID, startDate, endDate, reason } = req.body;
  const newLeave = new Leave({
    employeeID,
    startDate,
    endDate,
    reason,
    status: false,
  });
  let employee;
  try {
    employee = await Employee.findById(employeeID).exec();
    if (!employee) {
      res.status(404).json({ message: "Employee Not Found" });
      return;
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    const response = await newLeave.save({ session: sess });
    employee.leaveRequests.push(response._id);
    await employee.save({ session: sess });
    await sess.commitTransaction();
    res.status(200).json({ message: "Leave Request Created" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

const confirmLeaveRequest = async (req, res, next) => {
  const { id } = req.params;
  try {
    const leave = await Leave.findById(id).exec();
    leave.status = true;
    leave.save();
    res.status(200).json({ message: "Leave Request Confirmed" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getAllLeaves = getAllLeaves;
exports.createLeaves = createLeaves;
exports.confirmLeaveRequest = confirmLeaveRequest;
