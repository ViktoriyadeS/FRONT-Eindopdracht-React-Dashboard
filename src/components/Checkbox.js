import React, { useState } from "react";
import Chart from "../components/Chart";
import studentData from "../data/studentData";
import { overviewAssignments } from "../data/functions";

function Checkbox(props) {
  const [checked, setChecked] = useState(false);

  // const handleChange = () => {
  //   setChecked(!checked);
  // };
  const results = studentData.filter((item) => item.name === props.text);
  console.log(checked && results);

  //NEW

  return (
    <div key={props.text} className="checkbox">
      <input type="checkbox" value={props.text} checked={checked} onChange={e=>{setChecked(e.target.checked)}} />
      <label htmlFor="checkbox"> {props.text}</label>
      <div>{checked && console.log(props.text)}</div>
    </div>
  );
}

export default Checkbox;

