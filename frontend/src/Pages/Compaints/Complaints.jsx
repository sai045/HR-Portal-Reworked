import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Complaint from "./Complaint";
import "./Complaints.css";

const Complaints = () => {
  const [data, setData] = useState([]);
  const sendRequest = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_DOMIAN + "api/complaint",
        {
          headers: {
            Authorization: localStorage.getItem("Authorization"),
          },
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      setData(responseData.complaints);
    } catch (err) {}
  };
  useEffect(() => {
    sendRequest();
  }, []);
  return (
    <>
      <Navbar />
      <div className="complaints">
        <h1>Complaints</h1>
        {data.map((complaint) => (
          <Complaint
            employeeID={complaint.employeeID}
            category={complaint.category}
            description={complaint.description}
            status={complaint.status}
          />
        ))}
      </div>
    </>
  );
};

export default Complaints;
