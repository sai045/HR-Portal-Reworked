import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Complaint from "./Complaint";
import "./Complaints.css";
import Modal from "../../Components/Modal";
import NewComplaint from "./NewComplaint";

const Complaints = () => {
  const [loading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const sendRequest = async () => {
    setIsLoading(true);
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
      setIsLoading(false);
    } catch (err) {
      alert("Server is currently unreachable, Please come again later.");
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
      )}
    </>
  );
};

export default Complaints;
