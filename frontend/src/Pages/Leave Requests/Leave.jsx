import React, { useMemo } from "react";
import Navbar from "../../Components/Navbar";
import Leaves from "./data";
import Columns from "./columns";
import Table from "../../Components/Table";

const Leave = () => {
  const data = useMemo(() => Leaves, []);
  return (
    <>
      <Navbar />
      <h1>Leave Requests</h1>
      <Table Columns={Columns} data={data} button={"Leave"}/>
    </>
  );
};

export default Leave;
