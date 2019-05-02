import React from 'react';
import { Box, Row, Col } from '@smooth-ui/core-sc';

import * as Styled from './About.style';
import Abram from '../../img/Abram.PNG';
import Adam from '../../img/Adam.PNG';
import Tom from '../../img/Tom.PNG';

const About = () => (
  <Row
    mx={0}
    px={15}
    pt={{ xs: "120px", sm: "130px", lg: "140px", xl: "155px" }}
    pb="20px"
  >
    <Col
      px={0}
      xs={12}
      sm={10}
      osm={1}
      lg={8}
      olg={2}
      my={0}
      mx="auto"
    >
      <Box
        as="header"
        role="banner"
      >
        <Row
          mb={{ xs: "20px", sm: "30px", lg: "40px", xl: "50px" }}
        >
          <Col
          xs={18}>
            <Styled.SectionHeading
              as="h1"
            >
              Team RunTheWasatch:&nbsp;
            </Styled.SectionHeading>
            <br />
          </Col>
          <Col
            xs={12}
            md={4}
          >
          <Styled.Paragraph>
          Run-The-Wasatch is an app created for the Wasatch Mountain Wranglers Facebook group that is an easy to use trailhead finder. The app is meant to be used as an easy tool for planning runs and offer a reference for current trail conditions.
          </Styled.Paragraph>
          <br />
            <Styled.Paragraph>
              Abram: Authentication
              </Styled.Paragraph>
            <img
              src={Abram}
              alt="Authentication"
              style={
                {
                  display: 'block',
                  width: '70%',
                  maxWidth: '400px',
                  margin: '0 auto'
                }
              }
            />
            <br />
            <Styled.Paragraph>
              Adam: Team Lead | Frontend
              </Styled.Paragraph>
            <img
              src={Adam}
              alt="Team Lead | Frontend"
              style={
                {
                  display: 'block',
                  width: '70%',
                  maxWidth: '400px',
                  margin: '0 auto'
                }
              }
            />
            <br />
            <Styled.Paragraph>
              Tom: Backend | Map | Dev Ops
              </Styled.Paragraph>
            <img
              src={Tom}
              alt="Backend | Maps | Dev Ops"
              style={
                {
                  display: 'block',
                  width: '70%',
                  maxWidth: '400px',
                  margin: '0 auto'
                }
              }
            />

          </Col>
        </Row>
      </Box>
    </Col>
  </Row>
);

export default About;