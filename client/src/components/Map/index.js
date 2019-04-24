import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import API from "../../utils/api";
require("dotenv").config();

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class App extends Component {

  state = {
    trails: [],
    center: {
      lat: 40.7608,
      lng: -111.891
    },
    zoom: 11
  };
  componentDidMount() {
    this.loadTrails()
  }

  loadTrails=() =>{
    API.getTrails()
    .then(res => {
      this.setState({ trails: res.data });
   console.log(this.state.trails[0].latitude)
   console.log(this.state.trails[0].longitude)

    })
    .catch(err => console.log(err));
      
  }
  render() {

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "500px", width: "500px" }}>
        <GoogleMapReact
          bootstrapURLKeys={"AIzaSyBVHFnx-SjK9T1d8meeTg0ScKAhxjVaqu0"}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
        
          <AnyReactComponent lat={40.7608} lng={-111.891} text="My Marker" />
        </GoogleMapReact>
      </div>
     
    );
  }
}

export default App;

