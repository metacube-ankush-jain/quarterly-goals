import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Task from './containers/Task/Task';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Task />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
