import React, { Component } from "react";
import axios from "axios";
import jsonplaceholderAPI from '../api'

class PostForm extends Component {
  constructor(props) {
    super();
    this.state = {
      userid: "",
      title: "",
      body: "",
      deleteid: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state, e);
    jsonplaceholderAPI.post("posts", this.state)
      .then((Response) => {
        console.log("Response", Response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteDataHandler = (e) => {
    e.preventDefault();
    jsonplaceholderAPI.delete(`posts/${this.state.deleteid}`)
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err.message);
    })
  };

  render() {
    const { userid, title, body, deleteid } = this.state;
    return (
      <div>
        <h1> Add Form </h1>
        <form onSubmit={this.submitHandler}>
          <div>
            <label>userid: </label>
            <input
              type='text'
              name='userid'
              value={userid}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>title: </label>
            <input
              type='text'
              name='title'
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>body: </label>
            <input
              type='text'
              name='body'
              value={body}
              onChange={this.changeHandler}
            />
          </div>
          <button type='submit'>submit</button>
        </form>

        <h1> Delete Form </h1>
        <form onSubmit={this.deleteDataHandler}>
          <div>
            <label>deleteid: </label>
            <input
              type='text'
              name='deleteid'
              value={deleteid}
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
