const Applicant = require("../Models/Applicant");
const { validationResult } = require("express-validator");

const getAllApplicants = async (req, res, next) => {
  try {
    const applicants = await Applicant.find().exec();
    a = applicants.filter((a) => a.schedule == "");
    res.status(200).json({ applicants: a });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getApplicant = async (req, res, next) => {
  const { id } = req.params;
  try {
    const applicant = await Applicant.findById(id).exec();
    if (!applicant) {
      res.status(404).json({ message: "Applicant not found" });
      return;
    }
    res.status(200).json({ applicant });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const createApplicant = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(404).json({ message: "Invalid Input" });
    return;
  }
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    positionAppliedFor,
    applicationDate,
    resume,
  } = req.body;

  const newApplicant = new Applicant({
    firstName,
    lastName,
    email,
    phoneNumber,
    positionAppliedFor,
    applicationDate,
    resume,
  });

  try {
    await newApplicant.save();
    res.status(200).json({ message: "Applicant Saved" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteApplicant = async (req, res, next) => {
  const { id } = req.params;
  try {
    const applicant = await Applicant.findById(id).exec();
    if (!applicant) {
      res.status(404).json({ message: "Applicant not found" });
      return;
    }
    await Applicant.deleteOne({ _id: id });
    res.status(200).json({ message: "Applicant Deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

const scheduleApplicant = async (req, res, next) => {
  const { id } = req.params;
  try {
    const applicant = await Applicant.findById(id).exec();
    function getRandomDateTime() {
      const baseDate = new Date();
      baseDate.setDate(baseDate.getDate() + 1 + Math.floor(Math.random() * 5));
      baseDate.setHours(9 + Math.floor(Math.random() * 8));
      baseDate.setMinutes(Math.floor(Math.random() * 2) * 30);
      baseDate.setSeconds(0);

      return baseDate;
    }
    applicant.schedule = getRandomDateTime();
    await applicant.save();
    res.status(200).json({ message: "Applicant Scheduled" });
  } catch (err) {
    res.status(500).status({ error: err });
  }
};

const getAllScheduledApplicants = async (req, res, next) => {
  try {
    const scheduledApplicants = await Applicant.find().exec();
    a = scheduledApplicants.filter((a) => a.schedule !== "");
    res.status(200).json({ scheduledApplicants: a });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getAllApplicants = getAllApplicants;
exports.getApplicant = getApplicant;
exports.createApplicant = createApplicant;
exports.deleteApplicant = deleteApplicant;
exports.scheduleApplicant = scheduleApplicant;
exports.getAllScheduledApplicants = getAllScheduledApplicants;
