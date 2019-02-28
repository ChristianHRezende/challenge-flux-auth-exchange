import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css'

import SignIn from './scenes/Access/SignIn/SignIn';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <SignIn />
      </div>
    );
  }
}

export default App;
