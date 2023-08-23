import React, { useState, useEffect } from "react";
import Table from "../../Components/Table";
import Navbar from "../../Components/Navbar";
import {columns} from "./columns";

const Travel = () => {
  const [data, setData] = useState([]);
  const sendRequest = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_DOMIAN + "api/relocation",
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhaXZhcnNoaXRoMzA0MUBnbWFpbC5jb20iLCJuYW1lIjoiU2FpIFZhcnNoaXRoIiwiaWF0IjoxNjkyNzc4NDQ5LCJleHAiOjE2OTI3ODIwNDl9.4pR9rpdEPvA-xOGdvsfIrgzWWTsJk_q-28b1M7M5YpM",
          },
        }
      );
      const responseData = await response.json();
      setData(responseData.relocations);
      console.log(responseData.relocations);
    } catch (err) {}
  };
  useEffect(() => {
    sendRequest();
  }, []);
  return (
    <>
      <Navbar />
      <h1>Travel Requests</h1>
      <Table Columns={columns} data={data} button={"Travel"} />
    </>
  );
};

export default Travel;
