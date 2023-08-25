import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../../Components/Navbar";
import "./EmployeeDashboard.css";
import EmployeeDetails from "./EmployeeDetails";
import EmployeeTable from "./EmployeeTable";

const EmployeeDashboard = () => {
  const [loading, setIsLoading] = useState(false);
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
    },
    complaints: [],
    department: "",
    email: "",
    firstName: "",
    joinDate: "",
    lastName: "",
    leaveRequests: [],
    phoneNumber: "",
    position: "",
    relocationRequests: [],
  });
  const sendRequest = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        process.env.REACT_APP_DOMIAN + "api/employee/" + id,
        {
          headers: {
            Authorization: localStorage.getItem("Authorization"),
          },
        }
      );
      const responseData = await response.json();
      setEmployee(responseData.employee);
      setIsLoading(false);
    } catch (err) {}
  };
  const deleteRequest = async () => {
    const response = await fetch(
      process.env.REACT_APP_DOMIAN + "api/employee/" + id,
      {
        method: "DELETE",
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
      }
    );
    const responseData = await response.json();
    if (responseData.message == "Employee Deleted") {
      alert("Employee Deleted");
      window.location.href = "/employee";
    }
  };
  useEffect(() => {
    sendRequest();
  }, []);
  return (
    <>
      {loading && (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      )}
      {!loading && (
        <>
          <Navbar />
          <EmployeeDetails employee={employee} />
          <div className="employeeTables">
            <EmployeeTable
              data={employee.leaveRequests}
              title={"Leave Requests"}
            />
            <EmployeeTable
              data={employee.relocationRequests}
              title={"Relocation Requests"}
            />
            <EmployeeTable data={employee.complaints} title={"Complaints"} />
          </div>
          <button className="employeeDelete" onClick={deleteRequest}>
            Delete Employee
          </button>
        </>
      )}
    </>
  );
};

export default EmployeeDashboard;
