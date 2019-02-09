import React from "react";

const Display = props => (
  <nav class="navbar navbar-light bg-light">
    <span>
      <h1>Memory Balls</h1>
    </span>{" "}
    <span>
      <h1>Score: {props.score}/12</h1>
    </span>{" "}
    <span>
      <h1>Level: {props.level}</h1>
    </span>
    .
  </nav>
);

export default Display;
