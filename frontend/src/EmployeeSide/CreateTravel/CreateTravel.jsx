import React, { useState } from "react";
import "../create.css";
import Navbar from "../../Components/Navbar";

const CreateTravel = () => {
  const [errors, setErrors] = useState([]);
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
        // setIsOpen(false);
      }
      if (responseData.message == "Relocation Request Created") {
        alert("The operation is successfull");
        // setIsOpen(false);
        window.location.href = "/travel";
      }
    } catch (err) {
      alert("Server is currently unreachable, Please come again later.");
      window.location.href = "/travel";
    }
  };
  return (
    <>
      <Navbar />
      {errors.length > 0 && (
        <ul className="errors">
          {errors.map((error) => (
            <li>{error}</li>
          ))}
        </ul>
      )}
      <div className="employeeSide">
        <form className="detailsForm" onSubmit={submitHandler}>
          <h2>Create Relocation Request Form</h2>
          <input
            type="text"
            placeholder="Employee ID"
            required
            value={employeeID}
            onChange={(e) => {
              setEmployeeID(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            placeholder="Street"
            required
            value={street}
            onChange={(e) => {
              setStreet(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            placeholder="City"
            required
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            placeholder="State"
            required
            value={state}
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
          <br />
          <input
            type="number"
            placeholder="Zip Code"
            required
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
      </div>
    </>
  );
};

export default CreateTravel;
