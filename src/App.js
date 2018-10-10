import React, { Component } from 'react';
import Views from './views/views';
import Signin from './Signin/signin';
import Signup from './Signup/signup';
import Landing from './Landing/landing';
import {Route,Switch} from 'react-router-dom';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="w3-theme-l5">
          <Switch>
              <Route path="/signup" component={Signup}/>
              <Route path="/login" component={Signin}/>
              <Route path="/views" component={Views}/>
              <Route path="/" component={Landing}/>
          </Switch>
      </div>
    );
  }
}

export default App;
