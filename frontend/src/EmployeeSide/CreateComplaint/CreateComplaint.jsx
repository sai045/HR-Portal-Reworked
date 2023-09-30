import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import "../create.css";

const CreateComplaint = () => {
  const [errors, setErrors] = useState([]);
  const [employeeID, setEmployeeID] = useState();
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        process.env.REACT_APP_DOMIAN + "api/complaint",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("Authorization"),
          },
          body: JSON.stringify({
            employeeID,
            date: new Date().toISOString().substring(0, 10),
            category,
            description,
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
      }
      if (responseData.message == "Complaint Saved") {
        alert("The operation is successfull");
        window.location.href = "/complaint";
      }
    } catch (err) {
      alert("Server is currently unreachable, Please come again later.");
      window.location.href = "/complaint";
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
          <h2>Create Complaint Form</h2>
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
            placeholder="Category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            placeholder="Description"
            required
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default CreateComplaint;
