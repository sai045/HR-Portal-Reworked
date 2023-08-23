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
    accessor: "id",
    Cell: ({ cell }) => <button>Confirm</button>,
  },
];
