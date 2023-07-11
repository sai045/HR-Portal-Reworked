import React, { useMemo } from "react";
import Applicants from "./data";
import Columns from "./columns";
import Table from "../../Components/Table";
import Navbar from "../../Components/Navbar";

const Applicant = () => {
  const data = useMemo(() => Applicants, []);
  return (
    <>
      <Navbar />
      <Table Columns={Columns} data={data} />
    </>
  );
};

export default Applicant;
