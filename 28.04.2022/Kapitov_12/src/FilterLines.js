import React from "react";

function CheckBoxFilterLine(props) {
  return (
    <div>
      <input id={props.text} type="checkbox" onChange={props.onChange} />
      {props.text}
    </div>
  );
}

export default CheckBoxFilterLine;
