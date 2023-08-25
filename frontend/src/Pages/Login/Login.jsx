import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const onClick = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        process.env.REACT_APP_DOMIAN + "api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      const responseData = await response.json();
      if (!response.ok) {
        console.log("Login Failed");
      }
      localStorage.setItem("Authorization", responseData.token);
      window.location.href = "home"
    } catch (err) {}
  };
  return (
    <>
      <div className="login">
        <div className="loginForm">
          <div>
            <h2>Plexus Login</h2>
            <svg
              xmlns="htt4p://www.w3.org/2000/svg"
              width="50"
              height="70"
              fill="rgb(88 99 161)"
              viewBox="0 0 16 16"
            >
              <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
            </svg>
            <form>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                onClick={(e) => {
                  onClick(e);
                }}
              >
                Login
              </button>
            </form>
            <a href="/signup">Sign Up here</a>
          </div>
        </div>
        <div className="photo">
          <img
            src="https://res.cloudinary.com/dxcnrukd1/image/upload/f_auto,q_auto/qx1wta8epmr3kvydf0nr"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Login;
