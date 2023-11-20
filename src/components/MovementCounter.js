import React, { Component } from "react";

class MovementCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increamentCount = (params) => {
    this.setState((prevstate) => {
      return { count: (prevstate.count += 1) };
    });
  };

  render() {
    return <div>{this.props.children(this.state.count, this.increamentCount)}</div>;
  }
}

export default MovementCounter;
