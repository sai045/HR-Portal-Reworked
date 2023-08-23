import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Columns from "./columns";
import Table from "../../Components/Table";

const Schedule = () => {
  const [data, setData] = useState([]);
  const sendRequest = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_DOMIAN + "api/applicant/get/schedule",
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhaXZhcnNoaXRoMzA0MUBnbWFpbC5jb20iLCJuYW1lIjoiU2FpIFZhcnNoaXRoIiwiaWF0IjoxNjkyNzc4NDQ5LCJleHAiOjE2OTI3ODIwNDl9.4pR9rpdEPvA-xOGdvsfIrgzWWTsJk_q-28b1M7M5YpM",
          },
        }
      );
      const responseData = await response.json();
      setData(responseData.scheduledApplicants);
      console.log(responseData.scheduledApplicants);
    } catch (err) {}
  };
  useEffect(() => {
    sendRequest();
  }, []);
  return (
    <>
      <Navbar />
      <h1>Schedule</h1>
      <Table Columns={Columns} data={data} />
    </>
  );
};

export default Schedule;
