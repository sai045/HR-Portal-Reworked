export const Columns = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Qualification",
    accessor: "qualification",
  },
  {
    Header: "Department",
    accessor: "department",
  },
  {
    Header: "Schedule",
    accessor: "id",
    Cell: ({ cell }) => <button>Schedule</button>,
  },
];
