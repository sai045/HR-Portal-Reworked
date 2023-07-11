import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  var username = "Sai Varshith";
  return (
    <nav className="navbar">
      <Link to="/">
        <img src="/assets/Navbar/Logo.jpeg" alt="Logo Image" />
      </Link>
      <ul>
        <li>Details</li>
        <li>Logout</li>
        <li>{username}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
