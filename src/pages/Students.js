import { uniqueStudentNames, overviewAssignments } from "../data/functions";
import studentData from "../data/studentData";
import Chart from "../components/Chart";

import Checkbox from "../components/Checkbox";
import { useState } from "react";
import React from "react";
import StudentBtn from "../components/StudetBtn";

function Students() {
  const [studentChartData, setStudentChartData] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const studentChartLabels = overviewAssignments.map((item) => item.assignment);
  const handleClick = (el) => {
    console.log(el + " clicked");
    const results = studentData.filter((item) => item.name === el);
    setStudentChartData(results);
    setIsShown(current => !current);
  };
  const chartTitle = "";
  const studentsList = uniqueStudentNames.map((student) => {
    return (
      <div className="card" key={Math.random(100) + 100 * Math.random(100)}>
        <StudentBtn
          value={student}
          id={student}
          onClick={() => handleClick(student)}
        />
      </div>
    );
  });

  console.log(studentChartData);
  return (
    <div className="page">
      <div>
        <h1>List</h1>
        <div className="list">{studentsList}</div>
        {isShown && <h1>Student Votes</h1>}
        {isShown && (
          <div>
            <Chart
              data={studentChartData}
              labels={studentChartLabels}
              chartTitleText={chartTitle}
            />
            ;
          </div>
        )}
      </div>
    </div>
  );
}

export default Students;
