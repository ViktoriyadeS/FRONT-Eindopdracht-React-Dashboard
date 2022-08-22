import React from "react";
import studentData from "../data/studentData";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Assignment",
    selector: (row) => row.assignment,
    sortable: true,
  },
  {
    name: "Difficulty",
    selector: (row) => row.difficulty,
  },
  {
    name: "Fun",
    selector: (row) => row.fun,
  },
  {
    name: "Student",
    selector: (row) => row.name,
    sortable: true,
  },
];

const data = studentData.map((item) => ({
  id: 1 + Math.random(),
  assignment: item.assignment,
  difficulty: item.difficulty,
  fun: item.fun,
  name: item.name,
}));

const customStyles = {
  table: {
    style: {
      backgroundColor: "#dbdbdb",
    },
  },
  rows: {
    style: {
      minHeight: "32px",
    },
  },
  headCells: {
    style: {
      paddingLeft: "68px",
      paddingRight: "8px",
      backgroundColor: "rgba(75,192,192,0.2)",
      fontSize: "20px",
      fontFamily: "Montserrat, sans-serif",
      borderBottom: "2px black solid",
    },
  },
  cells: {
    style: {
      paddingLeft: "88px",
      paddingRight: "8px",
      //   backgroundColor: "#929291a5",
    },
  },
};

export default function Assignments() {
  return (
    <div className="page">
      <h2>Table: Overview Rating</h2>
      <div className="table-wrapper">
        <DataTable
          columns={columns}
          data={data}
          customStyles={customStyles}
          striped
        />
      </div>
    </div>
  );
}
