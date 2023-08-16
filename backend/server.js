// packages
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// app initialisation
const app = express();

// app options
app.use(bodyParser.json());
app.use(cors());

// database connection
const connectDB = require("./db");
connectDB();

// middleware
const authenticateToken = require("./Middleware/auth");

// routes
app.use("/api/auth", require("./Routes/authRoutes.js"));
app.use(
  "/api/applicant",
  authenticateToken,
  require("./Routes/applicantRoutes")
);
app.use("/api/employee", authenticateToken, require("./Routes/employeeRoutes"));
app.use(
  "/api/complaint",
  authenticateToken,
  require("./Routes/complaintRoutes")
);
app.use("/api/leave", authenticateToken, require("./Routes/leaveRoutes"));
app.use(
  "/api/relocation",
  authenticateToken,
  require("./Routes/relocationRoutes")
);
app.use(
  "/api/announcement",
  authenticateToken,
  require("./Routes/announcementRoutes")
);
app.use("/protected", authenticateToken, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

// invalid route
app.use((req, res, next) => {
  return res.status(404).json({ message: "Couldn't find this route" });
});

// starting the server
app.listen(5000, () => {
  console.log("Server started at port 5000");
});
