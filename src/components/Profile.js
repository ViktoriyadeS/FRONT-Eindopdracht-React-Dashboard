import React from "react";
import { useNavigate, useLocation } from "react-router";
import Chart from "./BarChart";
import DetailCard from "./DetailCard";

function Profile() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <button className="goBackBtn" onClick={() => navigate(-1)}></button>
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
