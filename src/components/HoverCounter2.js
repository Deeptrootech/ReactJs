import React, { Component } from "react";

class HoverCounter2 extends Component {
  render() {
    return (
      <h1 onMouseOver={this.props.increamentCount}>Hovered {this.props.count} Times.</h1>
    );
  }
}

export default HoverCounter2;
