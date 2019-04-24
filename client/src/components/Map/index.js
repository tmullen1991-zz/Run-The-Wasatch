import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import API from "../../utils/api";
require("dotenv").config();

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class App extends Component {
  static defaultProps = {
    center: {
      lat: 40.7608,
      lng: -111.891
    },
    zoom: 11
  };
  state = {
    trails: []
  };
  componentDidMount() {
    this.loadTrails()
    API.getTrails()
      .then(res => {
        console.log("inside function")
        this.setState({ trails: res.data });
      })
      .catch(err => console.log(err));
  }

  loadTrails=() =>{
    console.log("here")
    
      console.log(this.state.trails)
  }
  render() {
    return (
      // Important! Always set the container height explicitly
      /*<div style={{ height: "500px", width: "500px" }}>
        <GoogleMapReact
          bootstrapURLKeys={"AIzaSyCQy9QTncfhm94NyAaLN-i58zp2TP0mUNk"}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={40.7608} lng={-111.891} text="My Marker" />
        </GoogleMapReact>
      </div>*/
      <div></div>
    );
  }
}

export default App;
// make this an onClick event to load current trail data from Trail project API, send trail id
/*handleCurrentConditions= event => {
  event.preventDefault();
  const trailId = event.target.id;
  API.getTrailInfo(trailId)
    .then(res => {
      console.log(res.data.trails[0])
    })
    .catch(err => {
      console.log(err);
    });
    <a href="/" id="7002449"onClick={this.handleCurrentConditions}>Click</a>
};*/
