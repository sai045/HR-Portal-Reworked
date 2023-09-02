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
  const [errors, setErrors] = useState([]);
  const [loading, setIsLoading] = useState(false);

  const sendRequest = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (password != confirmPassword) {
      setErrors(["Passwords should match"]);
      setIsLoading(false);
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setErrors(["Enter Valid Email"]);
      setIsLoading(false);
      return;
    }
    try {
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
      if (responseData.errors) {
        setErrors(responseData.errors);
        setIsLoading(false);
        return;
      }
      if (responseData.message == "User Already Exists") {
        alert("User Already Exists, Please login with your credentials");
        window.location.href = "/";
        setIsLoading(false);
        return;
      }
      if (responseData.message == "User Sucessfully added") {
        alert("User Created, You can login now");
        window.location.href = "/";
        setIsLoading(false);
        return;
      }
    } catch (err) {
      setErrors(["Server is currently unreachable, Please come again later."]);
      setIsLoading(false);
    }
  };
  return (
    <>
      {loading && (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      )}
      {!loading && (
        <>
          <div className="signup">
            <div className="signupForm">
              <div>
                {errors.length == 0 && <h2>Plexus Signup</h2>}
                {errors.length > 0 && (
                  <ul className="errors">
                    {errors.map((error) => (
                      <li>{error}</li>
                    ))}
                  </ul>
                )}
                <form onSubmit={sendRequest}>
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <input
                    type="number"
                    placeholder="Phone Number"
                    required
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
                    required
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Confirm Password"
                    required
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                  <button type="submit">Signup</button>
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
      )}
    </>
  );
};

export default Signup;
