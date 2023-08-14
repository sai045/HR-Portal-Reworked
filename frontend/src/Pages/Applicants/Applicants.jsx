import React, { useMemo } from "react";
import Applicants from "./data";
import { Columns } from "./columns";
import Table from "../../Components/Table";
import Navbar from "../../Components/Navbar";

const Applicant = () => {
  const data = useMemo(() => Applicants, []);
  return (
    <>
      <Navbar />
      <h1>Applicants</h1>
      <Table Columns={Columns} data={data} button={"Applicant"}/>
    </>
  );
};

export default Applicant;
