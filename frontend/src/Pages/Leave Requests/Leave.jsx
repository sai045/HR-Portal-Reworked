import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import { columns } from "./columns";
import Table from "../../Components/Table";

const Leave = () => {
  const [data, setData] = useState([]);
  const sendRequest = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_DOMIAN + "api/leave", {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
      });
      const responseData = await response.json();
      setData(responseData.leaves);
      console.log(responseData.leaves);
    } catch (err) {}
  };
  useEffect(() => {
    sendRequest();
  }, []);
  return (
    <>
      <Navbar />
      <h1>Leave Requests</h1>
      <Table Columns={columns} data={data} button={"Leave"} />
    </>
  );
};

export default Leave;
