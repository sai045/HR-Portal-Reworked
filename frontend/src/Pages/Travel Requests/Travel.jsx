import React, { useState, useEffect } from "react";
import Table from "../../Components/Table";
import Navbar from "../../Components/Navbar";
import { columns } from "./columns";
import Modal from "../../Components/Modal";
import NewTravel from "./NewTravel";

const Travel = () => {
  const [loading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const sendRequest = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        process.env.REACT_APP_DOMIAN + "api/relocation",
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
      setData(responseData.relocations);
      setIsLoading(false);
    } catch (err) {
      alert("Server busy. Please try again later");
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
            title="Add Relocation Request Form"
            isOpen={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
          >
            <NewTravel setIsOpen={setIsOpen} />
          </Modal>
          <Navbar />
          <h1>Relocation Requests</h1>
          <Table
            Columns={columns}
            data={data}
            button={"Travel"}
            onClick={() => {
              setIsOpen(true);
            }}
          />
        </>
      )}
    </>
  );
};

export default Travel;
