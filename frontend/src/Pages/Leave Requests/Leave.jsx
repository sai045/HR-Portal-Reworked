import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import { columns } from "./columns";
import Table from "../../Components/Table";
import Modal from "../../Components/Modal";
import NewLeave from "./NewLeave";

const Leave = () => {
  const [loading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const sendRequest = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(process.env.REACT_APP_DOMIAN + "api/leave", {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
      });
      const responseData = await response.json();
      setData(responseData.leaves);
      setIsLoading(false);
    } catch (err) {}
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
            <NewLeave setIsOpen={setIsOpen} />
          </Modal>
          <Navbar />
          <h1>Leave Requests</h1>
          <Table
            Columns={columns}
            data={data}
            button={"Leave"}
            onClick={() => {
              setIsOpen(true);
            }}
          />
        </>
      )}
    </>
  );
};

export default Leave;
