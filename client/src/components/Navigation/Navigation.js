import React from 'react';
import { Box } from '@smooth-ui/core-sc';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Auth from "../../Auth/Auth.js";
//import { Logo } from '../index';
import * as Styled from './Navigation.style';
const auth = new Auth();
const Navigation = ({ location }) => (
  <Box
    width="100%"
    maxWidth="450px"
    position="fixed"
    left={0}
    zIndex={100}
    as="nav"
    role="navigation"
  >
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p="10px 0 10px 10px"
    >
      <Styled.NavList
        page={location.pathname}
      >
        <li>
          <Link
            to="/about"
            aria-label="About page"
          >
            <span
              className="nav-link_content"
              tabIndex="-1"
            >
              About
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/trails"
            aria-label="Trails page"
          >
            <span
              className="nav-link_content"
              tabIndex="-1"
            >
              Trails
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/map"
            aria-label="Trails page"
          >
            <span
              className="nav-link_content"
              tabIndex="-1"
            >
              Map
            </span>
          </Link>
        </li>
        <li>
          <Link
            onClick={auth.logout}
            aria-label="Trails page"
          >
            <span
              className="nav-link_content"
              tabIndex="-1"
            >
              Logout
            </span>
          </Link>
        </li>
      </Styled.NavList>
    </Box>
  </Box>
);

export default withRouter(Navigation);
