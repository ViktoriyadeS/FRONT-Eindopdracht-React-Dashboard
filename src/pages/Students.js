import React from "react";
import { useNavigate } from "react-router-dom";
import StudentBtn from "../components/StudetBtn";
import studentData from "../data/studentData";
import studentsDetails from "../data/studentsDetails";
import {
  uniqueStudentNames,
  overviewAssignments,
  assignmentsRatingAverageWithLabels,
  assignmentRatingAverage,
  assignmentGroups,
} from "../data/functions";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";

function Students() {
  let navigate = useNavigate();
  const handleClick = (el) => {
    const results = studentData.filter((item) => item.name === el);
    const profileDetails = studentsDetails.filter((item) => item.name === el);
    const routeChange = (el) => {
      let path = `${el}`;
      navigate(path, {
        state: {
          name: el,
          data: results,
          profile: profileDetails,
        },
      });
    };
    routeChange(el);
  };

  return (
    <div className="page">
      <div>
        {/* <h2>Profiles:</h2> */}
        <div className="list">
          {uniqueStudentNames.map((student) => {
            return (
              <div
                className="card"
                key={Math.random(100) + 100 * Math.random(100)}
              >
                <StudentBtn
                  value={student}
                  id={student}
                  onClick={() => handleClick(student)}
                />
              </div>
            );
          })}
        </div>
        <div className="infoBox">
          <span className="widget">
            <h3>Students:</h3>
            <p>{uniqueStudentNames.length}</p>
          </span>
          <span className="widget">
            <h3>Assignments:</h3>
            <p>{overviewAssignments.length}</p>
          </span>
          <span className="widget">
            <h3>Votes:</h3>
            <p>{studentData.length}</p>
          </span>
        </div>
        <div className="chartBox">
          <h2>Assignments Average Score:</h2>
    
          <LineChart
            chartData={assignmentsRatingAverageWithLabels}
            chartLabels={overviewAssignments.map((item) => item.assignment)}
          />
        </div>
      </div>
    </div>
  );
}

export default Students;
