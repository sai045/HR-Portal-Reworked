const Relocation = require("../Models/Relocation");
const Employee = require("../Models/Employee");
const mongoose = require("mongoose");

const getAllRelocations = async (req, res, next) => {
  try {
    const relocations = await Relocation.find().exec();
    res.status(200).json({ relocations });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const createRelocation = async (req, res, next) => {
  const { employeeID, requestDate, street, city, state, zipCode, reason } =
    req.body;
  const newRelocation = new Relocation({
    employeeID,
    requestDate,
    newAddress: {
      street,
      city,
      state,
      zipCode,
    },
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
    const response = await newRelocation.save({ session: sess });
    employee.relocationRequests.push(response._id);
    await employee.save({ session: sess });
    await sess.commitTransaction();
    res.status(200).json({ message: "Relocation Request Created" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

const confirmRelocationRequest = async (req, res, next) => {
  const { id } = req.params;
  try {
    const relocation = await Relocation.findById(id).exec();
    const employee = await Employee.findById(relocation.employeeID).exec();
    const sess = await mongoose.startSession();
    sess.startTransaction();
    relocation.status = true;
    employee.address = relocation.newAddress;
    await relocation.save({ session: sess });
    await employee.save({ session: sess });
    await sess.commitTransaction();
    res.status(200).json({ message: "Relocation Request Confirmed" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getAllRelocations = getAllRelocations;
exports.createRelocation = createRelocation;
exports.confirmRelocationRequest = confirmRelocationRequest;
