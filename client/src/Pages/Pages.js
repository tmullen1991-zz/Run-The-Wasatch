import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, Switch, withRouter } from 'react-router-dom';

import * as Styled from './Pages.style';
import Home from "../components/Home/Home"
import About from "../components/About/About"
import Map from "../components/Map"
import Trails from "../components/Trails/Trails"

class Pages extends Component {
  componentDidUpdate() {
    this.props.changeTheme(this.props.location);
  }

  render() {
    const { location } = this.props;
    return (
      <Styled.RoutesTransitionWrapper>
        <TransitionGroup
          className="transition-group"
        >
          <CSSTransition
            key={location.key}
            timeout={{ enter: 300, exit: 50 }}
            classNames="fade"
          >
            <div
              className="route-section"
            >
              <Switch
                location={location}
              >
                <Route
                  exact
                  path="/"
                  component={Home}
                />
                <Route
                  exact
                  path="/about"
                  component={About}
                />
                <Route
                  exact
                  path="/trails"
                  component={Trails}
                />
                <Route
                  exact
                  path="/map"
                  component={Map}
                />
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Styled.RoutesTransitionWrapper>
    )
  }
};

export default withRouter(Pages);