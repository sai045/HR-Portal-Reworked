import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Complaint from "./Complaint";
import "./Complaints.css";
import Modal from "../../Components/Modal";
import NewComplaint from "./NewComplaint";

const Complaints = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const sendRequest = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_DOMIAN + "api/complaint",
        {
          headers: {
            Authorization: localStorage.getItem("Authorization"),
          },
        }
      );
      const responseData = await response.json();
      setData(responseData.complaints);
    } catch (err) {}
  };
  useEffect(() => {
    sendRequest();
  }, []);
  return (
    <>
      <Modal
        title="Add Complaint Form"
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <NewComplaint setIsOpen={setIsOpen} />
      </Modal>
      <Navbar />
      <div className="complaints">
        <h1>Complaints</h1>
        <button
          className="newComplaints"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          New Complaint
        </button>
        {data.map((complaint) => (
          <Complaint
            id={complaint._id}
            employeeID={complaint.employeeID}
            category={complaint.category}
            description={complaint.description}
            status={complaint.status}
          />
        ))}
      </div>
    </>
  );
};

export default Complaints;
