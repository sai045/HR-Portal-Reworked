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
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import EmployeeDashboard from "./Pages/EmployeeDashboard/EmployeeDashboard";
import Protected from "./Components/Protected";
import { useJwt } from "react-jwt";
import CreateComplaint from "./EmployeeSide/CreateComplaint/CreateComplaint";
import CreateLeave from "./EmployeeSide/CreateLeave/CreateLeave";
import CreateTravel from "./EmployeeSide/CreateTravel/CreateTravel";

function App() {
  const { decodedToken, isExpired } = useJwt(
    localStorage.getItem("Authorization")
  );
  const isSignedIn = !isExpired;
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* HR  */}
          <Route
            path="/home"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Home />
              </Protected>
            }
          />
          <Route
            path="/applicant"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Applicant />
              </Protected>
            }
          />
          <Route
            path="/employee"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Employee />
              </Protected>
            }
          />
          <Route
            path="/employee/:id"
            element={
              <Protected isSignedIn={isSignedIn}>
                <EmployeeDashboard />
              </Protected>
            }
          />
          <Route
            path="/leave"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Leave />
              </Protected>
            }
          />
          <Route
            path="/schedule"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Schedule />
              </Protected>
            }
          />
          <Route
            path="/travel"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Travel />
              </Protected>
            }
          />
          <Route
            path="/complaint"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Complaints />
              </Protected>
            }
          />
          <Route
            path="/details"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Details />
              </Protected>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Dashboard />
              </Protected>
            }
          />
          <Route
            path="/salary"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Salary />
              </Protected>
            }
          />
          {/* Employee  */}
          <Route path="/createComplaint" element={<CreateComplaint />} />
          <Route path="/createLeave" element={<CreateLeave />} />
          <Route path="/createTravel" element={<CreateTravel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
