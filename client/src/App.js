import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import Home from "./pages/Home"
import './App.css';
import Auth from './Auth/Auth.js';
import Callback from "./pages/Callback";
import history from "./history"
import API from "./utils/api";
import Map from "./components/map"

const auth = new Auth();

if (!auth.isAuthenticated() && window.location.pathname !== "/callback"){
  auth.login();
}

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}


class App extends Component {
 
  componentDidMount() {
    
  }
 
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
