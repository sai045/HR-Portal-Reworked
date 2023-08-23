export const columns = [
  {
    Header: "Employee ID",
    accessor: "employeeID",
  },
  {
    Header: "From",
    accessor: "startDate",
  },
  {
    Header: "To",
    accessor: "endDate",
  },
  {
    Header: "Reason",
    accessor: "reason",
  },
  {
    Header: "Confirm",
    accessor: "id",
    Cell: ({ cell }) => <button>Confirm</button>,
  },
];
