import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useJwt } from "react-jwt";

const Navbar = () => {
  // getting the token name
  const jwtToken = localStorage.getItem("Authorization");
  const { decodedToken, isExpired } = useJwt(jwtToken);
  const [username, setUsername] = useState("");
  useEffect(() => {
    if (decodedToken != null) {
      setUsername(decodedToken.name);
    }
  }, [decodedToken]);

  const logout = () => {
    localStorage.removeItem("Authorization");
    window.location.href = "/";
  };

  // markup
  return (
    <>
      <nav className="navbar">
        <Link to="/home">
          <img
            src="https://res.cloudinary.com/dxcnrukd1/image/upload/f_auto,q_auto/v1/Hr%20Portal/c9qnnh9rwaje9kq6nfgn"
            alt="Logo Image"
          />
        </Link>
        <ul>
          <li>
            <a href="/details">Details</a>
          </li>
          <li onClick={logout} id="logout">
            Logout
          </li>
          <li>{username}</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
