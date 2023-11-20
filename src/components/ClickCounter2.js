import React, { Component } from "react";

class ClickCounter2 extends Component {
  render() {
    return (
      <button onClick={this.props.increamentCount}>
        Click {this.props.count} Times.
      </button>
    );
  }
}

export default ClickCounter2;
