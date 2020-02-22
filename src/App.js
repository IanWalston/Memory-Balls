import React from "react";

import Circle from "./components/colorball";
import Display from "./components/display";

import positions from "./positions.json";
import startingballs from "./startingballs.json";
import levels from "./levels.json";

class App extends React.Component {
    state = {
        score: 0,
        pickedcolors: [],
        level: 2,
        balls: startingballs
    };

    shuffle = () => {
        //get an array of the 12 positions in random order
        const randompositions = Object.keys(positions)
            .map(a => [Math.random(), a])
            .sort((a, b) => a[0] - b[0])
            .map(a => a[1]);

        //get a copy of balls with random positions
        const newballs = this.state.balls.map(ball => {
            ball.loc = positions[randompositions.pop()];
            return ball;
        });

        //set state balls to copy
        this.setState({ balls: newballs });
    };

    clickball = color => {
        //determin right from wrong
        if (this.state.pickedcolors.includes(color)) {
            alert("you've already picked that color");
            this.setState({
                pickedcolors: [],
                score: 0
            });
        } else {
            this.setState({
                pickedcolors: this.state.pickedcolors.concat([color]),
                score: this.state.score + 1
            });
            if (this.state.score >= 11) {
                //set next level
                alert("great job");

                this.setState({
                    pickedcolors: [],
                    score: 0,
                    level: this.state.level + 1
                });
                this.state.balls.forEach(ball => {
                    const newcolor = levels[
                        "level" + (this.state.level + 1)
                    ].pop();
                    ball.color = newcolor;
                });
              }
        }

        this.shuffle();
    };

    render() {
        return (
            <div>
                <Display score={this.state.score} level={this.state.level} />

                <svg viewBox="0 0 841.9 595.3">
                    {this.state.balls.map(ball => (
                        <Circle {...ball} click={this.clickball} />
                    ))}
                </svg>
            </div>
        );
    }
}

export default App;
