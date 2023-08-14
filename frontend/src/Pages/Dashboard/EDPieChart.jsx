import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const EDPieChart = () => {
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
  );
};

export default EDPieChart;
