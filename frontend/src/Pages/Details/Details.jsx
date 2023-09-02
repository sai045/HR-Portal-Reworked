import React, { useEffect, useState } from "react";
import "./Details.css";
import Navbar from "../../Components/Navbar";
import { useJwt } from "react-jwt";

const Details = () => {
  const [loading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: { city: "" },
  });
  const { decodedToken, isExpired } = useJwt(
    localStorage.getItem("Authorization")
  );
  const sendRequest = async () => {
    setIsLoading(true);
    try {
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
        setUser(responseData.user);
        setIsLoading(false);
      }
    } catch (err) {
      alert("Server is currently unreachable, Please come again later.");
      localStorage.removeItem("Authorization");
      setIsLoading(false);
      window.location.href = "/";
    }
  };
  useEffect(() => {
    sendRequest();
  }, [decodedToken]);
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
                  <p>{user.firstName + " " + user.lastName}</p>
                </div>
                <div className="detail">
                  <p>{user.email}</p>
                </div>
                <div className="detail">
                  <p>{user.phoneNumber}</p>
                </div>
                <div className="detail">
                  <p>{user.address.city}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Details;
