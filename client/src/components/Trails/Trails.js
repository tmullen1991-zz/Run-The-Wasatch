import React, { Component } from "react";
import { Box, Row, Col } from "@smooth-ui/core-sc";
import API from "../../utils/api";
import * as Styled from "./Trails.style";

class Trails extends Component {
  state = {
    trails: [],
    currentInfo: []
  };
  componentDidMount() {
    this.loadTopTrails();
  }

  loadTopTrails = () => {
    API.loadTopTrails()
      .then(res => {
        this.setState({ trails: res.data.trails });
        console.log(this.state.trails);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
        <Row
          mx={0}
          px={15}
          pt={{ xs: "120px", sm: "130px", lg: "140px", xl: "155px" }}
          pb="20px"
        >
          <Col px={0} xs={12} sm={10} osm={1} lg={8} olg={2} my={0} mx="auto">
            <Box as="header" role="banner">
              <Row mb={{ xs: "20px", sm: "30px", lg: "40px", xl: "50px" }}>
                <Col
                xs={12}>
                  <Styled.SectionHeading as="h1">
                    Trails:&nbsp;
                    <span role="img" aria-label="Thunderbolt emoji">
                      <ul>
                        {this.state.trails.map(trail => {
                          return (
                            <span>
                              <ol key={trail.id}>
                              <span>
                                <img
                                  key={trail.name}
                                  alt={trail.name}
                                  height="200px"
                                  width="200px"
                                  src={trail.imgMedium}
                                />
                                <a
                                  target="_blank"
                                  key={trail.id}
                                  href={trail.url}
                                >
                                  {trail.name}
                                </a>
                                </span>
                              </ol>
                            </span>
                          );
                        })}
                      </ul>
                    </span>
                  </Styled.SectionHeading>
                  </Col>
        </Row>
      </Box>
      <Box
        as="main"
        role="main"
      >
        <Row
          mb={{xs:"30px", sm:"40px", lg:"50px", xl:"80px"}}
        >
          <Col
            xs={12}
            mb={{xs:"15px", xl:"0px"}}
            xl={6}
            display= "flex"
            alignItems= "flex-end"
          >
                  <Styled.Paragraph>
                    <ul>
                      {this.state.trails.map(trail => {
                        return (
                          <li key={trail._id}>
                            <img
                              key={trail.name}
                              alt-text={trail.name}
                              height="150px"
                              width="150px"
                              src={trail.imgMedium}
                            />
                            <a key={trail.id} href={trail.url}>
                              {trail.name}
                              </a>
                                
                          <p>Condition Details: {trail.conditionDetails}</p>
                          </li>
                        );
                      })}
                    </ul>
                    </Styled.Paragraph>
                </Col>
              </Row>
              <Styled.Hr />
            </Box>
          </Col>
        </Row>
        );
      }
    }
    export default Trails;
