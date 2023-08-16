const Complaint = require("../Models/Complaint");

const getAllComplaints = async (req, res, next) => {
  try {
    const complaints = await Complaint.find().exec();
    res.status(200).json({ complaints });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const createComplaint = async (req, res, next) => {
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
    await Complaint.deleteOne({_id:id}).exec()
    res.status(200).json({ message: "Complaint Deleted" });
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err });
  }
};

exports.getAllComplaints = getAllComplaints;
exports.createComplaint = createComplaint;
exports.deleteComplaint = deleteComplaint;
