import React, { useEffect, useState } from "react";
import { Columns } from "./columns";
import Table from "../../Components/Table";
import Navbar from "../../Components/Navbar";
import Modal from "../../Components/Modal";
import NewApplicant from "./NewApplicant";

const Applicant = () => {
  const [loading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const sendRequest = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        process.env.REACT_APP_DOMIAN + "api/applicant",
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
        setIsLoading(false);
      }
      setData(responseData.applicants);
      setIsLoading(false);
    } catch (err) {
      alert("Server is currently unreachable, Please come again later.");
      setIsLoading(false)
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
            title="Add Applicant Form"
            isOpen={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
          >
            <NewApplicant setIsOpen={setIsOpen} />
          </Modal>
          <Navbar />
          <h1>Applicants</h1>
          <Table
            Columns={Columns}
            data={data}
            button={"Applicant"}
            onClick={() => {
              setIsOpen(true);
            }}
          />
        </>
      )}
    </>
  );
};

export default Applicant;
