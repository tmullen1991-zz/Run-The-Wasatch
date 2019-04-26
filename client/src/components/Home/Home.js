import React from 'react';
import { Box, Row, Col } from '@smooth-ui/core-sc';
import TextLoop from 'react-text-loop';

import * as Styled from './Home.style';

const Home = () => (
  <React.Fragment>  
    <Row
      mx={0}
      px={15}
      pt={{xs:"120px", sm:"130px", lg:"140px", xl:"155px"}}
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
          <Styled.Heading>
            Wasatch Mountain Wranglers&nbsp;
            <br className="break-large"/>
           Welcome!&nbsp;
            <br className="break-large"/>
            This website is for&nbsp;
            <br className="break-under-xs"/>
            <TextLoop
              interval={2500}
              springConfig={{ stiffness: 30, damping: 10 }}
              mask
            >
              <span>
                Trail Runners
              </span>
              <span>
                Ultra Runners
              </span>
              <span>
                Wranglers
              </span>

            </TextLoop>&nbsp;
            <br className="break-small"/>
            from&nbsp;
            <span>
              <a
                href="https://www.google.com/maps/place/Salt+Lake+City,+UT/@40.7767833,-112.0605688,48741m/data=!3m1!1e3!4m5!3m4!1s0x87523d9488d131ed:0x5b53b7a0484d31ca!8m2!3d40.7607793!4d-111.8910474"
                target="_blank"
                rel="noopener noreferrer"
                className="city-link"
                aria-label="Salt Lake City"
              >
                <span
                  tabIndex="-1"
                  className="city-link_content"
                >
                  Salt Lake City
                </span>
              </a>
            </span>
          </Styled.Heading>
        </Box>
      </Col>
    </Row>
    <Row
      mx={0}
      mt={{xs: "20px", md: "35px", lg:"45px"}}
      px={15}
    >
      <Col
        px={0}
        maxWidth="1100px"
        width="100%"
        my={0}
        mx="auto"
        as="section"
        role="region"
      >

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          mb={15}
        >
        <div className="fb-group" data-href="https://www.facebook.com/groups/232389966892330/" data-width="400" data-show-social-context="true" data-show-metadata="false"></div>
        </Box>

      </Col>
    </Row>
  </React.Fragment>  
);
export default Home;