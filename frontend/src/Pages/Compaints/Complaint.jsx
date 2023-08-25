import React from "react";

const Complaint = (props) => {
  const { id, employeeID, category, description, status } = props;
  const deleteRequest = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_DOMIAN + "api/complaint/" + id,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("Authorization"),
          },
        }
      );
      const responseData = await response.json();
      if (responseData.message == "Complaint Deleted") {
        window.location.href = "/complaint";
      }
    } catch (err) {}
  };
  return (
    <div className="complaint">
      <ul>
        <li>Employee ID: {employeeID}</li>
        <li>Category: {category}</li>
        <li>Description: {description}</li>
        <li>Status: {status}</li>
        <li>
          <button onClick={deleteRequest}>Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default Complaint;
