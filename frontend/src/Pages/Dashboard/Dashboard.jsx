import React from "react";
import Navbar from "../../Components/Navbar";
import "./Dashboard.css";
import Boxes from "./Boxes";
import { Records } from "./Records";
import EDPieChart from "./EDPieChart";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard">
        <h1 className="heading">Dashboard</h1>
        <Boxes />
        <div className="charts">
          <Records />
          <div></div>
          <EDPieChart />
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
