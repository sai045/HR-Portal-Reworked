import React from "react";

const Complaint = (props) => {
  const { employeeID, category, description, status } = props;
  return (
    <div className="complaint">
      <ul>
        <li>Employee ID: {employeeID}</li>
        <li>ategory: {category}</li>
        <li>Description: {description}</li>
        <li>Status: {status}</li>
        <li>
          <button>Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default Complaint;
