import React, { Component } from 'react';
import './App.css';
import Auth from './Auth/Auth.js';

const auth = new Auth();
auth.login();

class App extends Component {
  render() {
    return (
      <div>
        it works!!
      </div>
    );
  }
}

export default App;
