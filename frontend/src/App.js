import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Applicant from "./Pages/Applicants/Applicants";
import Employee from "./Pages/Employee/Employee";
import Leave from "./Pages/Leave Requests/Leave";
import Schedule from "./Pages/Schedule/Schedule";
import Travel from "./Pages/Travel Requests/Travel";
import Complaints from "./Pages/Compaints/Complaints";
import Details from "./Pages/Details/Details";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Salary from "./Pages/Salary/Salary";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/applicant" element={<Applicant />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/complaint" element={<Complaints />} />
          <Route path="/details" element={<Details />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/salary" element={<Salary />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
