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
        console.log(this.state.trails)
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Row
          mx={0}
          px={15}
          pt={{ xs: "120px", sm: "130px", lg: "140px", xl: "155px" }}
          pb="20px"
        >
          <Col px={0} xs={12} sm={10} osm={1} lg={8} olg={2} my={0} mx="auto">
            <Box as="header" role="banner">
              <Row mb={{ xs: "30px", sm: "40px", lg: "50px", xl: "60px" }}>
                <Col>
                  <Styled.SectionHeading as="h1">
                    Trails:&nbsp;
                    <span role="img" aria-label="Thunderbolt emoji">
                      <ul>
                        {this.state.trails.map(trail => {
                          return (
                            <li key={trail.id}>
                              <img
                                key={trail.name}
                                alt={trail.name}
                                height="200px"
                                width="200px"
                                src={trail.imgMedium}
                              />
                              <a key={trail.id} href={trail.url}>
                                {trail.name}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </span>
                  </Styled.SectionHeading>
                  <Styled.Paragraph />
                </Col>
              </Row>
            </Box>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Trails;
