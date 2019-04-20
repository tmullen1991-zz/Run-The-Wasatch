import { Router, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from "./pages/Home"
import './App.css';
import Auth from './Auth/Auth.js';
import Callback from "./pages/Callback";
import history from "./history"

const auth = new Auth();

if (!auth.isAuthenticated() && window.location.pathname !== "/callback"){
  debugger;
  auth.login();
}



const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}



class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </div>
      </Router>
    );
  }
}

export default App;
