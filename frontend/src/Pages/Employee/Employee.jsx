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
      <Table Columns={Columns} data={data} />
    </>
  );
};

export default Employee;
