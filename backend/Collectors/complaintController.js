const Complaint = require("../Models/Complaint");
const Employee = require("../Models/Employee");
const { validationResult } = require("express-validator");

const getAllComplaints = async (req, res, next) => {
  try {
    const complaints = await Complaint.find().exec();
    res.status(200).json({ complaints });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const createComplaint = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg); // Extract messages
    return res.status(400).json({ errors: errorMessages });
  }
  const { employeeID, date, category, description } = req.body;
  const newComplaint = new Complaint({
    employeeID,
    date,
    category,
    description,
    status: "Filed",
  });
  try {
    await newComplaint.save();
    res.status(200).json({ message: "Complaint Saved" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteComplaint = async (req, res, next) => {
  const { id } = req.params;
  try {
    const complaint = await Complaint.findById(id).exec();
    if (!complaint) {
      res.status(404).json({ message: "Complaint Not found" });
      return;
    }
    await Complaint.deleteOne({ _id: id }).exec();
    res.status(200).json({ message: "Complaint Deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

exports.getAllComplaints = getAllComplaints;
exports.createComplaint = createComplaint;
exports.deleteComplaint = deleteComplaint;
