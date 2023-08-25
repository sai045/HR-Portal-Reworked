import React from "react";

const EmployeeDetails = ({ employee }) => {
  return (
    <>
      <div className="details" id="employeeDetail">
        <h1>Details</h1>
        <div className="detail">
          <div>
            <div className="detail">
              <p>Name</p>
            </div>
            <div className="detail">
              <p>Email</p>
            </div>
            <div className="detail">
              <p>Contact</p>
            </div>
            <div className="detail">
              <p>Location</p>
            </div>
          </div>
          <div>
            <div className="detail">
              <p>{employee.firstName + " " + employee.lastName}</p>
            </div>
            <div className="detail">
              <p>{employee.email}</p>
            </div>
            <div className="detail">
              <p>{employee.phoneNumber}</p>
            </div>
            <div className="detail">
              <p>
                {employee.address.street +
                  "," +
                  employee.address.city +
                  "," +
                  employee.address.state +
                  "," +
                  employee.address.zipCode}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDetails;
