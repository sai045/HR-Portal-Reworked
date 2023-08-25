import React, { useState, useEffect } from "react";
import { columns } from "./columns";
import Table from "../../Components/Table";
import Navbar from "../../Components/Navbar";
import NewEmployee from "./NewEmployee";
import Modal from "../../Components/Modal";

const Employee = () => {
  const [loading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const sendRequest = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        process.env.REACT_APP_DOMIAN + "api/employee",
        {
          headers: {
            Authorization: localStorage.getItem("Authorization"),
          },
        }
      );
      const responseData = await response.json();
      if (responseData.message == "Forbidden") {
        alert(
          "The operation you are trying is unauthorized. Please Login Again"
        );
        window.location.href = "/";
      }
      setData(responseData.employees);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
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
          <Modal
            title="Add Employee Form"
            isOpen={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
          >
            <NewEmployee setIsOpen={setIsOpen} />
          </Modal>
          <Navbar />
          <h1>Employees</h1>
          <Table
            Columns={columns}
            data={data}
            button={"Employee"}
            onClick={() => {
              setIsOpen(true);
            }}
          />
        </>
      )}
    </>
  );
};

export default Employee;
