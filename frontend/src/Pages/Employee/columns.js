export const columns = [
  {
    Header: "First Name",
    accessor: "firstName",
  },
  {
    Header: "Last Name",
    accessor: "lastName",
  },
  {
    Header: "Department",
    accessor: "department",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Position",
    accessor: "position",
  },
  {
    Header: "Details",
    accessor: "id",
    Cell: ({ cell }) => <button>More Details</button>,
  },
];
