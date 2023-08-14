import React from "react";
import Navbar from "../../Components/Navbar";
import "./Dashboard.css";
import Boxes from "./Boxes";
import { Records } from "./Records";
import { PieChart, Pie, Tooltip } from "recharts";

const Dashboard = () => {
    const data = [
        { name: "Management", value: 10 },
        { name: "Accounting", value: 20 },
        { name: "Research", value: 30 },
        { name: "Product Management", value: 40 },
        { name: "Marketing", value: 40 },
        { name: "Labour", value: 40 },
        { name: "Production", value: 40 },
      ];
  return (
    <>
      <Navbar />
      <div className="dashboard">
        <h1 className="heading">Dashboard</h1>
        <Boxes />
        <div className="charts">
          <Records />
          <div></div>
          <div>
            <h2>
              Employee-Department <br />
              Chart
            </h2>
            <PieChart width={600} height={400}>
              <Pie
                dataKey="value"
                isAnimationActive={true}
                data={data}
                cx="40%"
                cy="50%"
                outerRadius={150}
                fill="#9cb5e2"
                label
              />
              <Tooltip />
            </PieChart>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
