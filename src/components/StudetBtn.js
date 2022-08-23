import React from "react";

function StudentBtn(props) {
  const { onClick, value } = props;
  return (
    <div>
      <button className="button" onClick={onClick}>
        {value}
      </button>
    </div>
  );
}
export default StudentBtn;
