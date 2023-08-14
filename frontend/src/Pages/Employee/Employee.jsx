import React, { useMemo } from "react";
import Employees from "./data";
import Columns from "./columns";
import Table from "../../Components/Table";
import Navbar from "../../Components/Navbar";

const Employee = () => {
  const data = useMemo(() => Employees, []);
  return (
    <>
      <Navbar />
      <h1>Employees</h1>
      <Table Columns={Columns} data={data} button={"Employee"} />
    </>
  );
};

export default Employee;
