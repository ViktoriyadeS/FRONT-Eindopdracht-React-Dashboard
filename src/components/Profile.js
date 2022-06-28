import React from "react";
import { useNavigate, useLocation } from "react-router";
import Chart from "./BarChart";
import DetailCard from "./DetailCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Profile() {
  const location = useLocation();
  const navigate = useNavigate();
  const arrow = <FontAwesomeIcon icon={faCircleArrowLeft} />;

  return (
    <>
      <button className="goBackBtn" onClick={() => navigate(-1)}>
        {arrow} Go Back
      </button>
      <DetailCard
        name={location.state.name}
        last_name={location.state.profile.map((item) => item.last_name)}
        age={location.state.profile.map((item) => item.age)}
        email={location.state.profile.map((item) => item.email)}
        phone={location.state.profile.map((item) => item.phone)}
        avatar={location.state.profile.map((item) => item.avatar)}
      />
      <Chart
        data={location.state.data}
        labels={location.state.data.map((item) => item.assignment)}
        chartTitleText={location.state.name}
      />
    </>
  );
}

export default Profile;
