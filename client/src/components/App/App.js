import { Router, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from "../Pages/Home"
import '../App/App.style';
import Auth from '../../Auth/Auth.js';
import Callback from "../Pages/Callback";
import history from "../../history"
import Map from "../Map"

import { Grid, Row, Col } from '@smooth-ui/core-sc';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../global.style'
import * as Styled from './App.style';
import { Pages, Navigation, ScrollToTop } from '../index';
import { hideLoader, FONT_LATO, FONT_PLAYFAIR } from '../../utils/index';
import theme from '../../themes';

const auth = new Auth();

if (!auth.isAuthenticated() && window.location.pathname !== "/callback") {
  auth.login();
}



const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}


class App extends Component {
  state = {
    visible: false,
    theme: theme.dark,
  };

  changeTheme = ({ pathname: page }) => {
    if (this.state.theme !== theme.dark && page === '/') {
      this.setState({
        theme: theme.dark,
      });
    } else if (this.state.theme !== theme.light && (page === '/about' || page === '/trails' || page === '/map')) {
      this.setState({
        theme: theme.light,
      });
    }
  }

  execAfterFontLoadEval = () => {
    hideLoader();
    this.setState({
      visible: true
    });
  };

  componentDidMount() {
    Promise.all([FONT_LATO.load(), FONT_PLAYFAIR.load()])
      .then(() => {
        // If google fonts have successfully loaded, show main screen
        this.execAfterFontLoadEval();
      })
      .catch(() => {
        // If google fonts have not successfully loaded, show main screen anyway, but with fallback fonts specified in global styles
        this.execAfterFontLoadEval();
      });
  };

  render() {
    const { visible, theme } = this.state;

    return (
      <ThemeProvider
        theme={theme}
      >
        <React.Fragment>
          <GlobalStyle />
          <Styled.InitialFadeInBox
            visible={visible}
          >
            <Grid
              fluid
              px={0}
              mx={0}
            >
              <Row
                mx={0}
                px={15}
              >
                <Col
                  px={0}
                >
                  <Router history={history}>
                    <ScrollToTop>
                      <Navigation />
                      <Pages
                        changeTheme={this.changeTheme}
                      />
                    </ScrollToTop>
                    <div>
                      <Route exact path="/" component={Home} />
                      <Route path="/callback" render={(props) => {
                        handleAuthentication(props);
                        return <Callback {...props} />
                      }} />
                    </div>
                  </Router>
                </Col>
              </Row>
            </Grid>
          </Styled.InitialFadeInBox>
        </React.Fragment>
      </ThemeProvider>


    );
  }
}

export default App;
