import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import Applicant from "./Pages/Applicants/Applicants"
import Employee from './Pages/Employee/Employee';
import Leave from "./Pages/Leave Requests/Leave"
import Schedule from "./Pages/Schedule/Schedule"
import Travel from "./Pages/Travel Requests/Travel"

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
