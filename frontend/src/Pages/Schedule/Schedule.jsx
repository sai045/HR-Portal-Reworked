import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Columns from "./columns";
import Table from "../../Components/Table";

const Schedule = () => {
  const [loading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const sendRequest = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        process.env.REACT_APP_DOMIAN + "api/applicant/get/schedule",
        {
          headers: {
            Authorization: localStorage.getItem("Authorization"),
          },
        }
      );
      const responseData = await response.json();
      setData(responseData.scheduledApplicants);
      setIsLoading(false);
    } catch (err) {
      alert("Server Busy. Please try again later");
      setIsLoading(false);
    }
  };
  useEffect(() => {
    sendRequest();
  }, []);
  return (
    <>
      {loading && (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      )}
      {!loading && (
        <>
          <Navbar />
          <h1>Schedule</h1>
          <Table Columns={Columns} data={data} />
        </>
      )}
    </>
  );
};

export default Schedule;
