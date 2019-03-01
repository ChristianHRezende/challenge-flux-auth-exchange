import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './App.css'

import SignIn from './scenes/Access/SignIn/SignIn';
import Home from './scenes/Home/Home';
import SignUp from './scenes/Access/Signup/Signup';
import Dashboard from './scenes/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <Route path="/" exact={true} component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
