import React, { useEffect, useState } from "react";
import { Columns } from "./columns";
import Table from "../../Components/Table";
import Navbar from "../../Components/Navbar";

const Applicant = () => {
  const [data, setData] = useState([]);
  const sendRequest = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_DOMIAN + "api/applicant",
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhaXZhcnNoaXRoMzA0MUBnbWFpbC5jb20iLCJuYW1lIjoiU2FpIFZhcnNoaXRoIiwiaWF0IjoxNjkyNzc4NDQ5LCJleHAiOjE2OTI3ODIwNDl9.4pR9rpdEPvA-xOGdvsfIrgzWWTsJk_q-28b1M7M5YpM",
          },
        }
      );
      const responseData = await response.json();
      setData(responseData.applicants);
    } catch (err) {}
  };
  useEffect(() => {
    sendRequest();
  }, []);
  return (
    <>
      <Navbar />
      <h1>Applicants</h1>
      <Table Columns={Columns} data={data} button={"Applicant"} />
    </>
  );
};

export default Applicant;
