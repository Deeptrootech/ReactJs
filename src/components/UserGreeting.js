import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IsLoggedIn: true,
    };
  }

  render() {
    return this.state.IsLoggedIn ? (
      <div>Welcome Deep..!</div>
    ) : (
      <div>Welcome Guest..!</div>
    );
  }
}

export default UserGreeting;
