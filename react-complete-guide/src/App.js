import React, { Component } from 'react';
import './App.css';
import BlogPost from './BlogPost/BlogPost';
import Clock from './Clock/Clock'

class App extends Component {

  render () {

    return (
      <div className="App">
        <Clock/>
      </div>
    );
  }
}

export default App;
