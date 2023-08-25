const Confirm = async (id) => {
  try {
    const response = await fetch(
      process.env.REACT_APP_DOMIAN + "api/relocation/" + id,
      {
        method: "PATCH",
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
      }
    );
    const responseData = await response.json();
    if (responseData.message == "Forbidden") {
      alert("Your session expired. Please login again");
      window.location.href = "/";
    } else {
      window.location.href = "/travel";
    }
  } catch (err) {}
};

export const columns = [
  {
    Header: "Employee ID",
    accessor: "employeeID",
  },
  {
    Header: "Street",
    accessor: "newAddress.street",
  },
  {
    Header: "City",
    accessor: "newAddress.city",
  },
  {
    Header: "State",
    accessor: "newAddress.state",
  },
  {
    Header: "ZipCode",
    accessor: "newAddress.zipCode",
  },
  {
    Header:"Reason",
    accessor:"reason"
  },
  {
    Header: "Confirm",
    accessor: "_id",
    Cell: ({ value }) => (
      <button
        onClick={() => {
          Confirm(value);
        }}
      >
        Confirm
      </button>
    ),
  },
];
