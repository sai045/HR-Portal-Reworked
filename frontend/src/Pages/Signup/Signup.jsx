import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const sendRequest = async (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      alert("Passwords should match");
      return;
    }
    const response = await fetch(
      process.env.REACT_APP_DOMIAN + "api/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phoneNumber,
          street,
          city,
          state,
          zipCode,
          password,
        }),
      }
    );
    const responseData = await response.json();
    if (responseData.message == "User Already Exists") {
      alert("User Already Exists, Please login with your credentials");
      window.location.href = "/";
      return;
    }
    if (responseData.message == "User Sucessfully added") {
      alert("User Created, You can login now");
      window.location.href = "/";
      return;
    }
  };
  return (
    <>
      <div className="signup">
        <div className="signupForm">
          <div>
            <h2>Plexus Signup</h2>
            <form>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="number"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Street"
                value={street}
                onChange={(e) => {
                  setStreet(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="text"
                placeholder="State"
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                }}
              />
              <input
                type="number"
                placeholder="Zip Code"
                value={zipCode}
                onChange={(e) => {
                  setZipCode(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
              <button onClick={sendRequest}>Signup</button>
            </form>
            <a href="/">Login here</a>
          </div>
        </div>
        <div className="photo">
          <img
            src="https://res.cloudinary.com/dxcnrukd1/image/upload/f_auto,q_auto/jarckq3r1dkrbsgcdmqg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Signup;
