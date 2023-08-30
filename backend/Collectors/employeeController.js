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

function generateRandomPassword() {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numericChars = "0123456789";

  const allChars = lowercaseChars + uppercaseChars + numericChars;

  let password = "";
  password += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
  password += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
  password += numericChars[Math.floor(Math.random() * numericChars.length)];

  for (let i = 0; i < 5; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  // Convert password to array and shuffle it for better randomness
  password = password.split("");
  for (let i = password.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [password[i], password[j]] = [password[j], password[i]];
  }

  return password.join("");
}

const randomPassword = generateRandomPassword();
console.log(randomPassword);

const createEmployee = async (req, res, next) => {
  var {
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
    password,
  } = req.body;

  if (password !== null) {
    password = generateRandomPassword();
  }

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
    password,
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
