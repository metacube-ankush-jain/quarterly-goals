import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
//import App from './App1';
// import App from './App2';
import App from './App3';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));

registerServiceWorker();
