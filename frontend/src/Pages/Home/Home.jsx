import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import IconButton from "./IconButton";
import "./Home.css";
import { useJwt } from "react-jwt";

const Home = () => {
  const role = localStorage.getItem("Role");
  const jwtToken = localStorage.getItem("Authorization");
  const { decodedToken, isExpired } = useJwt(jwtToken);
  const [employeeID, setEmplpyeeID] = useState("");
  useEffect(() => {
    if (decodedToken != null) {
      setEmplpyeeID(decodedToken.id);
    }
  }, [decodedToken]);
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="homeButtons">
          <div className="row">
            {role === "Admin" && (
              <IconButton
                imgLink="https://cdn.onlinewebfonts.com/svg/img_233159.svg"
                title="DashBoard"
                link="dashboard"
              />
            )}
            <IconButton
              imgLink="https://cdn.onlinewebfonts.com/svg/img_549436.png"
              title="Employees"
              link={role === "Admin" ? "employee" : `employee/${employeeID}`}
            />
            <IconButton
              imgLink="https://cdn.onlinewebfonts.com/svg/img_189017.png"
              title="Schedule"
              link="schedule"
            />
            <IconButton
              imgLink="https://cdn.onlinewebfonts.com/svg/img_209777.png"
              title="Applicants"
              link="applicant"
            />
          </div>
          <div className="row">
            <IconButton
              imgLink="https://cdn.onlinewebfonts.com/svg/img_131998.png"
              title="Travel Requests"
              link={role === "Admin" ? "travel" : "createTravel"}
            />
            <IconButton
              imgLink="https://cdn.onlinewebfonts.com/svg/img_235631.png"
              title="Complaints"
              link={role === "Admin" ? "complaint" : "createComplaint"}
            />
            {role === "Admin" && (
              <IconButton
                imgLink="https://cdn.onlinewebfonts.com/svg/img_235198.png"
                title="Salary"
                link="salary"
              />
            )}
            <IconButton
              imgLink="https://cdn.onlinewebfonts.com/svg/img_129646.png"
              title="Leave Requests"
              link={role === "Admin" ? "leave" : "createLeave"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
