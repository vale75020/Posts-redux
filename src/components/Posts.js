import React, { Component } from "react";

class Posts extends Component {
  state = {
    posts: []
  };

  componentWillMount() {
    //console.log("mounted")
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      //.then(data => console.log(data));
      .then(data => this.setState({ posts: data }));
  }

  render() {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

export default Posts;
