import React from "react";
import "./Salary.css";
import Navbar from "../../Components/Navbar";
import SPieChart from "./SPieChart";
import Table from "./Table";
import { COLUMNS } from "./columns";
import data from "./data";

const Salary = () => {
  return (
    <>
      <Navbar />
      <h1>Salary</h1>
      <div className="salaryCharts">
        <SPieChart />
        <Table data={data} Columns={COLUMNS} />
      </div>
    </>
  );
};

export default Salary;
