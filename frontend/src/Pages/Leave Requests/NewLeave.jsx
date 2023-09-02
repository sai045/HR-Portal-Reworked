import React, { useState } from "react";

const NewLeave = ({ setIsOpen }) => {
  const [errors, setErrors] = useState([]);
  const [employeeID, setEmployeeID] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(process.env.REACT_APP_DOMIAN + "api/leave", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("Authorization"),
        },
        body: JSON.stringify({
          employeeID,
          startDate,
          endDate,
          reason,
        }),
      });
      const responseData = await response.json();
      if (responseData.errors) {
        setErrors(responseData.errors);
        return;
      }
      if (responseData.message == "Forbidden") {
        alert(
          "The operation you are trying is unauthorized. Please Login Again"
        );
        window.location.href = "/";
      }
      if (responseData.message == "Employee Not Found") {
        alert("Please enter valid Employee ID");
      }
      if (responseData.message == "Leave Request Created") {
        alert("The operation is successfull");
        window.location.href = "/leave";
      }
    } catch (err) {
      alert("Server is currently unreachable, Please come again later.");
      window.location.href = "/leave";
    }
  };
  return (
    <>
      {errors.length > 0 && (
        <ul className="errors">
          {errors.map((error) => (
            <li>{error}</li>
          ))}
        </ul>
      )}
      <form className="detailsForm" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Employee ID"
          value={employeeID}
          onChange={(e) => {
            setEmployeeID(e.target.value);
          }}
        />
        <br />
        <label htmlFor="">Start Date</label>
        <br />
        <input
          type="date"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => {
            setStartDate(e.target.value);
          }}
        />
        <br />
        <label htmlFor="">End Date</label>
        <br />
        <input
          type="date"
          placeholder="End Date"
          value={endDate}
          onChange={(e) => {
            setEndDate(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="Reason"
          value={reason}
          onChange={(e) => {
            setReason(e.target.value);
          }}
        />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default NewLeave;
