import React, { useState, useEffect } from "react";
import { columns } from "./columns";
import Table from "../../Components/Table";
import Navbar from "../../Components/Navbar";

const Employee = () => {
  const [data, setData] = useState([]);
  const sendRequest = async () => {
    console.log(process.env.REACT_APP_DOMIAN + "api/employee")
    try {
      const response = await fetch(
        process.env.REACT_APP_DOMIAN + "api/employee",
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhaXZhcnNoaXRoMzA0MUBnbWFpbC5jb20iLCJuYW1lIjoiU2FpIFZhcnNoaXRoIiwiaWF0IjoxNjkyNzgyMjIwLCJleHAiOjE2OTI3ODU4MjB9.rANMSyFcL3QJU878fNnG_Sx0GALxVRZ0941Yl3tstas",
          },
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      setData(responseData.employees);
    } catch (err) {console.log(err)}
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
