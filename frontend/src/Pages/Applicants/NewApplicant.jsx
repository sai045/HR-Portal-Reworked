import React, { useState } from "react";

const NewApplicant = ({setIsOpen}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [resume, setResume] = useState("");
  const [positionAppliedFor, setPositionAppliedFor] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        process.env.REACT_APP_DOMIAN + "api/applicant",
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
            resume,
            positionAppliedFor,
            applicationDate: new Date(),
          }),
        }
      );
      const responseData = await response.json();
      if (responseData.message == "Forbidden") {
        alert(
          "The operation you are trying is unauthorized. Please Login Again"
        );
        window.location.href = "/";
      }
      if (responseData.message == "Applicant Saved") {
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
        placeholder="Resume Link"
        value={resume}
        onChange={(e) => {
          setResume(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Position"
        value={positionAppliedFor}
        onChange={(e) => {
          setPositionAppliedFor(e.target.value);
        }}
      />
      <br />
      <button>Submit</button>
    </form>
  );
};

export default NewApplicant;
