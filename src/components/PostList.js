import React, { Component } from "react";
import axios from "axios";
import jsonplaceholderAPI from '../api'


class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    jsonplaceholderAPI.get("posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ errorMsg: "Error Retrieving Data" });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        Post Lists:
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        { errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}

export default PostList;
