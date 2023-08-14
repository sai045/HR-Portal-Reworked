import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export const Records = () => {
  const data = [
    { name: "Interviews", value: 10 },
    { name: "Employees", value: 20 },
    { name: "Leaves", value: 30 },
    { name: "Travels", value: 40 },
  ];
  return (
    <>
      <div className="records">
        <h2>Records in past time_interval</h2>
        <BarChart
          width={520}
          height={350}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar
            dataKey="value"
            fill=" rgb(88 99 161)"
            background={{ fill: "#eee" }}
          />
        </BarChart>
        <select id="setDays">
          <option value="6">Last 6 Days</option>
          <option value="30">Last 1 Month</option>
          <option value="730">Last 2 years</option>
          <option value="1460">Last 4 years</option>
        </select>
      </div>
    </>
  );
};
