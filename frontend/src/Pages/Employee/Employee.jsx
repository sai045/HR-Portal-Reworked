import React, { useState, useEffect } from "react";
import { columns } from "./columns";
import Table from "../../Components/Table";
import Navbar from "../../Components/Navbar";

const Employee = () => {
  const [data, setData] = useState([]);
  const sendRequest = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_DOMIAN + "api/employee",
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhaXZhcnNoaXRoMzA0MUBnbWFpbC5jb20iLCJuYW1lIjoiU2FpIFZhcnNoaXRoIiwiaWF0IjoxNjkyNzc4NDQ5LCJleHAiOjE2OTI3ODIwNDl9.4pR9rpdEPvA-xOGdvsfIrgzWWTsJk_q-28b1M7M5YpM",
          },
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      setData(responseData.employees);
    } catch (err) {}
  };
  useEffect(() => {
    sendRequest();
  }, []);
  return (
    <>
      <Navbar />
      <h1>Employees</h1>
      <Table Columns={columns} data={data} button={"Employee"} />
    </>
  );
};

export default Employee;
