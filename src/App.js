import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css'

import Dashboard from './scenes/Dashboard/Dashboard'

class App extends Component {
  render() {
    return (

      <div className='app'>
        <Dashboard />
      </div>

    );
  }
}

export default App;
