import React, { useState } from "react";

const NewComplaint = ({ setIsOpen }) => {
  const [employeeID, setEmployeeID] = useState("");
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
            date: new Date(),
            category,
            description,
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
      if (responseData.message == "Employee Not Found") {
        alert("Please enter valid Employee ID");
        setIsOpen(false);
      }
      if (responseData.message == "Complaint Saved") {
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
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br />
      <button>Submit</button>
    </form>
  );
};

export default NewComplaint;
