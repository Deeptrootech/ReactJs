import React, { Component } from "react";

class ClassClick extends Component {
  constructor() {
    super();
    this.state = { message: "Hello" };
    this.Clickhandler = this.Clickhandler.bind(this)
  }

  Clickhandler() {
    this.setState({message:"GoodBye..!"}, ()=> {console.log("Class based clicked...!!");})
  }

  render() {
    return (
      <div>
        {/* ClassClickBind Approach1 : <button onClick={this.Clickhandler.bind(this)}>Click Me</button> */}
        {/* ClassClickBind Approach2 : <button onClick={() => this.Clickhandler()}>Click Me</button> */}
        ClassClickBind Approach3 (In MostCase Used) : <button onClick={this.Clickhandler}>Click Me</button>
        
        <h3>Message: </h3> {this.state.message}
      </div>
    );
  }
}

export default ClassClick;
