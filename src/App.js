import React from "react";
import Circle from "./components/colorball";
import positions from "./positions.json";
import startingballs from "./startingballs.json";

class App extends React.Component {
  state = {
    score: 0,
    balls: startingballs
  };

  shuffle = () => {
    //get an array of the 12 positions in random order
    const randompositions = Object.keys(positions)
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);

    //mutate copy of balls with random positions
    const newballs = this.state.balls.map(ball => {
      ball.loc = positions[randompositions.pop()];
      return ball;
    });

    //set state balls to copy
    this.setState({ balls: newballs });
  };

  render() {
    return (
      <svg viewBox="0 0 841.9 595.3">
        {this.state.balls.map(ball => (
          <Circle {...ball} shuffle={this.shuffle} />
        ))}
      </svg>
    );
  }
}

export default App;
