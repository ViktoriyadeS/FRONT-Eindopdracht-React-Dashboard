import React from "react";

function DetailCard(props) {
  const { age, email, phone, avatar } = props;
  return (
    <div className="detailCard">
      <img src={avatar} alt="avatar" className="avatar" />
      <div className="details">
        <p>
          <b>AGE:</b> {age}
        </p>
        <p>
          <b>E-MAIL:</b> {email}
        </p>
        <p>
          <b>PHONE:</b> {phone}
        </p>
      </div>
    </div>
  );
}

export default DetailCard;
