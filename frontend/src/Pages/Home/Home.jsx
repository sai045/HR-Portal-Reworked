import React from "react";
import Navbar from "../../Components/Navbar";
import IconButton from "./IconButton";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="homeButtons">
          <div className="row">
            <IconButton
              imgLink="http://cdn.onlinewebfonts.com/svg/img_233159.svg"
              title="DashBoard"
            />
            <IconButton
              imgLink="https://cdn.onlinewebfonts.com/svg/img_549436.png"
              title="Employees"
              link="employee"
            />
            <IconButton
              imgLink="http://cdn.onlinewebfonts.com/svg/img_189017.png"
              title="Schedule"
              link="schedule"
            />
            <IconButton
              imgLink="http://cdn.onlinewebfonts.com/svg/img_209777.png"
              title="Applicants"
              link="applicant"
            />
          </div>
          <div className="row">
            <IconButton
              imgLink="http://cdn.onlinewebfonts.com/svg/img_131998.png"
              title="Travel Requests"
              link="travel"
            />
            <IconButton
              imgLink="http://cdn.onlinewebfonts.com/svg/img_235631.png"
              title="Complaints"
            />
            <IconButton
              imgLink="http://cdn.onlinewebfonts.com/svg/img_235198.png"
              title="Salary"
            />
            <IconButton
              imgLink="http://cdn.onlinewebfonts.com/svg/img_129646.png"
              title="Leave Requests"
              link="leave"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
