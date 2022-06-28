import React from "react";
import { useNavigate } from "react-router-dom";
import StudentBtn from "../components/StudetBtn";
import studentData from "../data/studentData";
import studentsDetails from "../data/studentsDetails";
import {
  uniqueStudentNames,
  overviewAssignments,
  assignmentRatingAverage,
  assignmentGroups,
} from "../data/functions";

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
        <h1>List</h1>
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
        <h1>Student Votes</h1>
        <div className="infoBox">
          <span className="widget">
            <h3>Students</h3>
            <p>{uniqueStudentNames.length}</p>
          </span>
          <span className="widget">
            <h3>Total Assignments</h3>
            <p>{overviewAssignments.length}</p>
          </span>
          <span className="widget">
            <h3>Total Votes</h3>
            <p>{studentData.length}</p>
          </span>
        </div>
        <hr />
        <div className="infoBox">
          <span className="widget">
            <h3>Most Difficult: </h3>
            <p>{}</p>
          </span>
          <span className="widget">
            <h3>Most Fun: </h3>
            <p>{}</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Students;
