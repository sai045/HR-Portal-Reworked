const Schedule = async (id) => {
  try {
    const response = await fetch(
      process.env.REACT_APP_DOMIAN + "api/applicant/schedule/" + id,
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
      window.location.href = "/applicant"
    }
  } catch (err) {}
};

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
    accessor: "_id",
    Cell: ({ value }) => (
      <button
        onClick={() => {
          Schedule(value);
        }}
      >
        Schedule
      </button>
    ),
  },
];
