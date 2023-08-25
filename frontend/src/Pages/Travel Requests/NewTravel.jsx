import React, { useState } from "react";

const NewTravel = ({ setIsOpen }) => {
  const [employeeID, setEmployeeID] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [reason, setReason] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        process.env.REACT_APP_DOMIAN + "api/relocation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("Authorization"),
          },
          body: JSON.stringify({
            employeeID,
            requestDate: new Date(),
            street,
            city,
            state,
            zipCode,
            reason,
          }),
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      if (responseData.message == "Forbidden") {
        alert(
          "The operation you are trying is unauthorized. Please Login Again"
        );
        window.location.href = "/";
      }
      if (responseData.message == "Employee Not Found") {
        alert("Please enter valid Employee ID");
        setIsOpen(false);
      }
      if (responseData.message == "Relocation Request Created") {
        alert("The operation is successfull");
        setIsOpen(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
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
      <input
        type="text"
        placeholder="Street"
        value={street}
        onChange={(e) => {
          setStreet(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="State"
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <br />
      <input
        type="number"
        placeholder="Zip Code"
        value={zipCode}
        onChange={(e) => {
          setZipCode(e.target.value);
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
  );
};

export default NewTravel;
