import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increament() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("dgagsukgugui");
    //   }
    // );

    // If you want to update state based on previous state
    this.setState((prevState, props) => ({
      count : prevState.count + 1
    }))

  }


  increamentfive(){
    this.increament()
    this.increament()
    this.increament()
    this.increament()
    this.increament()
  }

  render() {
    return (
      <div>
        <p>Count - {this.state.count}</p>
        <button onClick={() => this.increamentfive()}>Add Count</button>
      </div>
    );
  }
}

export default Counter;
