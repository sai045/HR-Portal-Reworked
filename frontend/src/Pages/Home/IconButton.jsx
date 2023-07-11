import React from "react";
import { Link } from "react-router-dom";

const IconButton = ({ imgLink, title, link }) => {
  return (
    <>
      <Link to={`/${link}`} className="homeIcon">
        <img src={imgLink} alt={title} />
        <h5>{title}</h5>
      </Link>
    </>
  );
};

export default IconButton;
