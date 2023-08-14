import React from "react";
import Navbar from "../../Components/Navbar";
import Complaint from "./Complaint";
import "./Complaints.css";
import data from "./data";

const Complaints = () => {
  return (
    <>
      <Navbar />
      <div className="complaints">
        <h1>Complaints</h1>
        {data.map((complaint) => (
          <Complaint
            name={complaint.name}
            department={complaint.department}
            complaint={complaint.complaint}
          />
        ))}
      </div>
    </>
  );
};

export default Complaints;
