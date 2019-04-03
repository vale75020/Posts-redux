import React, { Component } from 'react';
import Posts from './components/Posts'
import PostForm from './components/PostForm'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>React Redux Posts App</h1>
        </header>
        <PostForm />
        <hr />
        <Posts />
      </div>
    );
  }
}

export default App;
