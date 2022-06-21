import React, { setState, useState } from "react";
import studentData from "../data/studentData";

function StudentBtn(props) {
  const { onClick, value } = props;
  return (
    <div>
      <button className="button" onClick={onClick}>{value}</button>
    </div>
  );
}
export default StudentBtn;
