import React from "react";

const Display = props => (
  <div>
    <nav className="navbar navbar-light bg-light">
        <h1>Memory Balls</h1>
        <h1>Score: {props.score}/12</h1>
        <h1>Level {props.level}</h1>
    </nav>
    <div className="row justify-content-center">
      <p class='alert alert-info'> pick each color once</p>
    </div>
  </div>
);

export default Display;
