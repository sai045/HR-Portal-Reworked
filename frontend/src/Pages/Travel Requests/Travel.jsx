import React, { useState, useEffect } from "react";
import Table from "../../Components/Table";
import Navbar from "../../Components/Navbar";
import { columns } from "./columns";

const Travel = () => {
  const [data, setData] = useState([]);
  const sendRequest = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_DOMIAN + "api/relocation",
        {
          headers: {
            Authorization: localStorage.getItem("Authorization"),
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
