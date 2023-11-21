import React, { Component } from "react";
import axios from "axios";

class PostForm extends Component {
  constructor(props) {
    super();
    this.state = {
      userid: "",
      title: "",
      body: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state, e);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((Response) => {
        console.log("Response", Response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { userid, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type='text'
              name='userid'
              value={userid}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type='text'
              name='title'
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type='text'
              name='body'
              value={body}
              onChange={this.changeHandler}
            />
          </div>
          <button type='submit'>submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
