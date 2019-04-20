import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from "./pages/Home"
import './App.css';
import Auth from './Auth/Auth.js';

const auth = new Auth();
//auth.login();



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />

        </div>
      </Router>
    );
  }
}

export default App;
