import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  var username = "Sai Varshith";
  return (
    <nav className="navbar">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dxcnrukd1/image/upload/f_auto,q_auto/v1/Hr%20Portal/c9qnnh9rwaje9kq6nfgn"
          alt="Logo Image"
        />
      </Link>
      <ul>
        <li>
          <a href="/details">Details</a>
        </li>
        <li>Logout</li>
        <li>{username}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
