export const Columns = [
  {
    Header: "First Name",
    accessor: "firstName",
  },
  {
    Header: "Last Name",
    accessor: "lastName",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Phone Number",
    accessor: "phoneNumber",
  },
  {
    Header: "Resume",
    accessor: "resume",
  },
  {
    Header: "Position",
    accessor: "positionAppliedFor",
  },
  {
    Header: "Schedule",
    accessor: "id",
    Cell: ({ cell }) => <button>Schedule</button>,
  },
];
