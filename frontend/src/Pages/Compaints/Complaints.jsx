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
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhaXZhcnNoaXRoMzA0MUBnbWFpbC5jb20iLCJuYW1lIjoiU2FpIFZhcnNoaXRoIiwiaWF0IjoxNjkyNzc4NDQ5LCJleHAiOjE2OTI3ODIwNDl9.4pR9rpdEPvA-xOGdvsfIrgzWWTsJk_q-28b1M7M5YpM",
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
