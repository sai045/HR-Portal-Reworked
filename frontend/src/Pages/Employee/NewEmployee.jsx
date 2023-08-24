import React, { useState } from "react";

const NewEmployee = ({ setIsOpen }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      phoneNumber,
      position,
      department,
      joinDate,
      street,
      city,
      state,
      zipCode
    );
    try {
      const response = await fetch(
        process.env.REACT_APP_DOMIAN + "api/employee",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("Authorization"),
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            phoneNumber,
            position,
            department,
            joinDate,
            street,
            city,
            state,
            zipCode,
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
      if (responseData.message == "Employee Saved") {
        alert("The operation is successfull");
        setIsOpen(false);
        window.location.href = "/employee"
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className="detailsForm" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <br />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <br />
      <input
        type="number"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => {
          setPosition(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => {
          setDepartment(e.target.value);
        }}
      />
      <br />
      <input
        type="date"
        placeholder="Join Date"
        value={joinDate}
        onChange={(e) => {
          setJoinDate(e.target.value);
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
      <button>Submit</button>
    </form>
  );
};

export default NewEmployee;