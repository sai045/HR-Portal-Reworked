import React, { useMemo } from "react";
import Table from "../../Components/Table";
import Navbar from "../../Components/Navbar";
import Travels from "./data";
import Columns from "./columns";

const Travel = () => {
  const data = useMemo(() => Travels, []);
  return (
    <>
      <Navbar />
      <Table Columns={Columns} data={data} />
    </>
  );
};

export default Travel;
