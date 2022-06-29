import BarChart from "../components/BarChart";
import {
  assignmentRatingAverage,
  projects,
  uniqueStudentNames,
  assignmentGroups,
} from "../data/functions";

const HomePage = () => {
  const labels = projects.map((item) => item.assignment);
  const projectAverageRating = assignmentRatingAverage.filter(
    (item) => item.assignment === "SCRUM" || item.assignment.includes("Project")
  );
  const chartTitle = "";

  return (
    <div className="page">
      <div className="infoBox">
        <span className="widget home">
          <h3>Students:</h3>
          <p>{uniqueStudentNames.length}</p>

          <h3>Projects:</h3>
          <p>{projects.length}</p>

          <h3>Modules:</h3>
          <p>{assignmentGroups.length}</p>
        </span>
      </div>
      <div className="mobile-box">
        <p>Please visit our desktop version of the site to see graphs</p>
      </div>
      <div className="chartBox">
        <h2>Projects Average Score:</h2>
        <BarChart
          data={projectAverageRating}
          labels={labels}
          chartTitleText={chartTitle}
        />
      </div>
    </div>
  );
};
export default HomePage;
