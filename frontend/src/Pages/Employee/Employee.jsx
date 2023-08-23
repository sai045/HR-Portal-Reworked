import React, { useState, useEffect } from "react";
import { columns } from "./columns";
import Table from "../../Components/Table";
import Navbar from "../../Components/Navbar";

const Employee = () => {
  const [data, setData] = useState([]);
  const sendRequest = async () => {
    console.log(process.env.REACT_APP_DOMIAN + "api/employee");
    try {
      const response = await fetch(
        process.env.REACT_APP_DOMIAN + "api/employee",
        {
          headers: {
            Authorization: localStorage.getItem("Authorization"),
          },
        }
      );
      const responseData = await response.json();
      setData(responseData.employees);
    } catch (err) {
      console.log(err);
    }
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
