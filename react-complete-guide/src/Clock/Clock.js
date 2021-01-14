import React, { Component } from "react";

const clockTile = {
  color: "black",
  textAlign: "center",
  marginTop: "50px",
  fontSize: "32pt"
};

const clockSpan = {
  padding: "4px",
};

let runner;

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: this.getCurrentTime(),
        };
    }

    getCurrentTime = () => {
        const time = new Date().toLocaleTimeString([], {
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        });
        return time;
    };

  componentDidMount() {
    runner = setInterval(() => {
      this.setState({ time: this.getCurrentTime() });
    }, 1000);
  }

  componentWillUnmount() {
    if (runner) {
      clearInterval(runner);
    }
  }

  render() {
    return (
      <div style={clockTile}>
        <span style={clockSpan}>{this.state.time}</span>
      </div>
    );
  }
}
export default Clock;
