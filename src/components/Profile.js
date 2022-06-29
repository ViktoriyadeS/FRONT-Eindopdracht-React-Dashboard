import React from "react";
import { useNavigate, useLocation } from "react-router";
import Chart from "./BarChart";
import DetailCard from "./DetailCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

const arrow = <FontAwesomeIcon icon={faCircleArrowLeft} />;

function Profile() {
  const location = useLocation();
  const navigate = useNavigate();

  const difficultyArr = location.state.data.map((item) => item.difficulty);
  const funArr = location.state.data.map((item) => item.fun);
  const getScore = (arr) => arr.reduce((a, b) => a + b, 0);

  return (
    <div className="page">
      <div className="topRow">
        <DetailCard
          name={location.state.name}
          last_name={location.state.profile.map((item) => item.last_name)}
          age={location.state.profile.map((item) => item.age)}
          email={location.state.profile.map((item) => item.email)}
          phone={location.state.profile.map((item) => item.phone)}
          avatar={location.state.profile.map((item) => item.avatar)}
        />
        <div className="infoBox">
          <span className="widget">
            <h3>Assignments rated: </h3>
            <p>{location.state.data.length}</p>
          </span>
          <span className="widget">
            <h3>Difficulty score: </h3>
            <p>{getScore(difficultyArr)}</p>
          </span>
          <span className="widget">
            <h3>Fun score: </h3>
            <p>{getScore(funArr)}</p>
          </span>
        </div>
      </div>
      <button className="goBackBtn" onClick={() => navigate(-1)}>
        {arrow} Go Back
      </button>
      <div className="mobile-box">
        <p>Please visit our desktop version of the site to see graphs</p>
      </div>
      <div className="chartBox">
        <Chart
          data={location.state.data}
          labels={location.state.data.map((item) => item.assignment)}
          chartTitleText={location.state.name}
        />
      </div>
    </div>
  );
}

export default Profile;
