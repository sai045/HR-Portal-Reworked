import React from "react";
import "./Details.css";
import Navbar from "../../Components/Navbar";

const Details = () => {
  return (
    <>
      <Navbar />
      <div className="details">
        <h1>Details</h1>
        <div className="detail">
          <div>
            <div className="detail">
              <p>Name</p>
            </div>
            <div className="detail">
              <p>Email</p>
            </div>
            <div className="detail">
              <p>Contact</p>
            </div>
            <div className="detail">
              <p>Location</p>
            </div>
          </div>
          <div>
            <div className="detail">
              <p>Sai Varshith Aalasyam</p>
            </div>
            <div className="detail">
              <p>saivarshith3041@gmail.com</p>
            </div>
            <div className="detail">
              <p>9392522043</p>
            </div>
            <div className="detail">
              <p>Khammam</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
