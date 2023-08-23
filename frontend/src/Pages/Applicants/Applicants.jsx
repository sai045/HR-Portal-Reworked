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
            Authorization: localStorage.getItem("Authorization"),
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
