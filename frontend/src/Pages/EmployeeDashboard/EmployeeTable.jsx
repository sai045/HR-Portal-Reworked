import React from "react";

const EmployeeTable = ({ data, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <table className="Table" id="employeeTable">
        <thead>
          <tr>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
