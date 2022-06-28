import React from "react";
import { useNavigate } from "react-router-dom";
import StudentBtn from "../components/StudetBtn";
import studentData from "../data/studentData";
import studentsDetails from "../data/studentsDetails";
import {
  uniqueStudentNames,
  overviewAssignments,
  assignmentRatingAverage,
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
      </div>
    </div>
  );
}

export default Students;
