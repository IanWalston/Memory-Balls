import React from "react";

const Circle = props => (
  <circle
    cx={props.loc.x}
    cy={props.loc.y}
    r={props.radius}
    fill={props.color}
    onClick={()=>props.click(props.color)}
  />
);

export default Circle;
