import React from "react";

const Circle = props => (
  <circle
    cx={props.loc.x}
    cy={props.loc.y}
    r="50"
    fill={props.color}
    onClick={props.shuffle}
  />
);

export default Circle;
