import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "deep",
      comments: "This is default comment",
      topic: "",
    };
  }

  usernameChange = (event) => {
    this.setState({ username: event.target.value });
  };
  commentChange = (event) => {
    this.setState({ comments: event.target.value });
  };
  topicChange = (event) => {
    this.setState({topic: event.target.value}, () => console.log("Callback called.."))
  }
  submitHandler = (event) => {
    alert(`${this.state.username} Submitted Form..!!`)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>Username:</label>
          <input
            type='text'
            value={this.state.username}
            onChange={this.usernameChange}></input>
        </div>
        <div>
          <label>Comments:</label>
          <textarea value={this.state.comments} onChange={this.commentChange}></textarea>
        </div>
        <div>
          <label>Topic:</label>
          <select value={this.state.topic} onChange={this.topicChange}>
            <option value=""> -- select --</option>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="vue">vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;  
