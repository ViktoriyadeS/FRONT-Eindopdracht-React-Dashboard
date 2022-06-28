import Chart from "../components/Chart";
import {
  overviewAssignments,
  assignmentRatingAverage,
  projects,
  uniqueStudentNames,
} from "../data/functions";

const HomePage = () => {
  const labels = projects.map((item) => item.assignment);
  const projectAverageRating = assignmentRatingAverage.filter(
    (item) => item.assignment === "SCRUM" || item.assignment.includes("Project")
  );
    const chartTitle = ""
  return (
    <div className="page">
      <div className="infoBox">
        <span className="widget">
          <h3>Total Students</h3>
          <p>{uniqueStudentNames.length}</p>
        </span>
        <span className="widget">
          <h3>Total Assignments</h3>
          <p>{overviewAssignments.length}</p>
        </span>
        <span className="widget">
          <h3>Total Projects</h3>
          <p>{projects.length}</p>
        </span>
      </div>
      <div className="chartBox">
        <h2>Projects Average Score:</h2>
        <Chart data={projectAverageRating} labels={labels} chartTitleText = {chartTitle}/>
      </div>
    </div>
  );
};
export default HomePage;
