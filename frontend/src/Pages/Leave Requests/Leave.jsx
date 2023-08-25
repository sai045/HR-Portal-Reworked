import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import { columns } from "./columns";
import Table from "../../Components/Table";
import Modal from "../../Components/Modal";
import NewLeave from "./NewLeave";

const Leave = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const sendRequest = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_DOMIAN + "api/leave", {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
      });
      const responseData = await response.json();
      console.log(responseData);
      setData(responseData.leaves);
    } catch (err) {}
  };
  useEffect(() => {
    sendRequest();
  }, []);
  return (
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
  );
};

export default Leave;
