import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './App.css'

import Home from './scenes/Home/Home'
import SignIn from './scenes/Access/SignIn/SignIn'
import SignUp from './scenes/Access/SignUp/SignUp'
import Dashboard from './scenes/Dashboard/Dashboard'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      form: {
        email: ''
      }
    }
  }

  onClickSignupHandler = (inputText) => {
    this.setState({ form: { ...this.state.form, email: inputText } })
  }

  render() {
    return (
      <Router>
        <div className='app'>
          <Route path="/" exact={true} render={() => <Home onClickConfirmEmail={this.onClickSignupHandler} email={this.state.form.email} />} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" render={() => <SignUp email={this.state.form.email} />} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
