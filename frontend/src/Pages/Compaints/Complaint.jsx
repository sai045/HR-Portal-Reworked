import React from "react";

const Complaint = (props) => {
  const { name, department, complaint } = props;
  return (
    <div className="complaint">
      <ul>
        <li>Name: {name}</li>
        <li>Department: {department}</li>
        <li>Complaint: {complaint}</li>
        <li>
          <button>Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default Complaint;
