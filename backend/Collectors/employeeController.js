const Employee = require("../Models/Employee");

const getAllEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.find().exec();
    res.status(200).json({ employees });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getEmployee = async (req, res, next) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findById(id).exec();
    if (!employee) {
      res.status(404).json({ message: "Employee Not Found" });
      return;
    }
    res.status(200).json({ employee });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const createEmployee = async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    position,
    department,
    joinDate,
    street,
    city,
    state,
    zipCode,
  } = req.body;

  const newEmployee = new Employee({
    firstName,
    lastName,
    email,
    phoneNumber,
    position,
    department,
    joinDate,
    address: {
      street,
      city,
      state,
      zipCode,
    },
    complaints: [],
    leaveRequests: [],
    relocationRequests: [],
  });

  try {
    newEmployee.save();
    res.status(200).json({ message: "Employee Saved" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteEmployee = async (req, res, next) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findById(id).exec();
    if (!employee) {
      res.status(404).json({ message: "Employee Not Found" });
      return;
    }
    await Employee.deleteOne({ _id: id }).exec();
    res.status(200).json({ message: "Employee Deleted" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getAllEmployees = getAllEmployees;
exports.getEmployee = getEmployee;
exports.createEmployee = createEmployee;
exports.deleteEmployee = deleteEmployee;