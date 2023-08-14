import React, { useMemo } from "react";
import Navbar from "../../Components/Navbar";
import Schedules from "./data";
import Columns from "./columns";
import Table from "../../Components/Table";

const Schedule = () => {
  const data = useMemo(() => Schedules, []);
  return (
    <>
      <Navbar />
      <h1>Schedule</h1>
      <Table Columns={Columns} data={data} />
    </>
  );
};

export default Schedule;
