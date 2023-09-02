import React, { useState } from "react";

const NewApplicant = ({ setIsOpen }) => {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [resume, setResume] = useState("");
  const [positionAppliedFor, setPositionAppliedFor] = useState("");
  const [department, setDepartment] = useState("");

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
            department,
            applicationDate: new Date().toISOString().substring(0, 10),
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
      if (responseData.message == "Applicant Saved") {
        alert("The operation is successfull");
        setIsOpen(false);
        window.location.href = "/applicant";
      }
    } catch (err) {
      alert("Server is currently unreachable, Please come again later.");
      window.location.href = "/applicant";
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
          placeholder="First Name"
          required
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          required
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <br />
        <input
          type="number"
          placeholder="Phone Number"
          required
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="Resume Link"
          required
          value={resume}
          onChange={(e) => {
            setResume(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="Position"
          required
          value={positionAppliedFor}
          onChange={(e) => {
            setPositionAppliedFor(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="Department"
          required
          value={department}
          onChange={(e) => {
            setDepartment(e.target.value);
          }}
        />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default NewApplicant;
