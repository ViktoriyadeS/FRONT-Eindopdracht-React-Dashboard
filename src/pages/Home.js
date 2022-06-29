import BarChart from "../components/BarChart";
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
  const chartTitle = "";
  return (
    <div className="page">
      <div className="infoBox">
        <span className="widget">
          <h3>Students:</h3>
          <p>{uniqueStudentNames.length}</p>
        </span>
        <span className="widget">
          <h3>Projects:</h3>
          <p>{projects.length}</p>
        </span>
        <span className="widget">
          <h3>Assignments:</h3>
          <p>{overviewAssignments.length}</p>
        </span>
        
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
