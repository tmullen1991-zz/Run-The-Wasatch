import React, { Component } from 'react';
import './App.css';
import Auth from './Auth/Auth.js';

const auth = new Auth();
auth.login();
class App extends Component {

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }


  render() {

        const { isAuthenticated } = this.props.auth;

        return (
          <div>
            <nav>
              <nav>
                <nav>
                  <a href="#">Auth0 - React</a>
                </nav>
                <button
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.goTo.bind(this, 'home')}
                >
                  Home
                </button>
                {
                  !isAuthenticated() && (
                      <button
                        bsStyle="primary"
                        className="btn-margin"
                        onClick={this.login.bind(this)}
                      >
                        Log In
                      </button>
                    )
                }
                {
                  isAuthenticated() && (
                      <button
                        bsStyle="primary"
                        className="btn-margin"
                        onClick={this.logout.bind(this)}
                      >
                        Log Out
                      </button>
                    )
                }
              </nav>
            </nav>
          </div>
        );
      }
    }
    
    export default App;
