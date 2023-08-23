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
            Authorization: localStorage.getItem("Authorization"),
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
