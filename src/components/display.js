import React from "react";

const Display = props => (
  <div>
    <nav className="navbar navbar-light bg-light">
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
    <div className="row justify-content-center">
      <p> pick each color once</p>
    </div>
  </div>
);

export default Display;
