import React, { useEffect, useState } from "react";
import "./Details.css";
import Navbar from "../../Components/Navbar";
import { useJwt } from "react-jwt";

const Details = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const { decodedToken, isExpired } = useJwt(
    localStorage.getItem("Authorization")
  );
  const sendRequest = async () => {
    if (decodedToken != undefined) {
      const email = decodedToken.email;
      const response = await fetch(
        process.env.REACT_APP_DOMIAN + "api/auth/getUserDetails",
        {
          method: "POST",
          headers: {
            Authorization: localStorage.getItem("Authorization"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      setName(responseData.user.firstName + " " + responseData.user.lastName);
      setEmail(responseData.user.email);
      setPhoneNumber(responseData.user.phoneNumber);
      setLocation(responseData.user.address.city);
    }
  };
  useEffect(() => {
    sendRequest();
  }, [decodedToken]);
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
              <p>{name}</p>
            </div>
            <div className="detail">
              <p>{email}</p>
            </div>
            <div className="detail">
              <p>{phoneNumber}</p>
            </div>
            <div className="detail">
              <p>{location}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
