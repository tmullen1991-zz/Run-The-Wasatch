import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import API from "../../utils/api";
import Marker from "../Marker";
//import Hoverable from "./hover"

class App extends Component {
  state = {
    trails: [],
    center: {
      lat: 40.709,
      lng: -111.799
    },
    zoom: 11
  };
  componentDidMount() {
    this.loadTrails();
  }

  loadTrails = () => {
    API.getTrails()
      .then(res => {
        this.setState({ trails: res.data });
      })
      .catch(err => console.log(err));
  };

 
  render() {
    return (
      <div>
        {this.state.trails.length > 0 ? (
           // Important! Always set the container height explicitly
          <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyBVHFnx-SjK9T1d8meeTg0ScKAhxjVaqu0"
              }}
              defaultCenter={this.state.center}
              defaultZoom={this.state.zoom}        
            >
              {this.state.trails.map(trail => {
                return (
                  <Marker
                    key={trail.name}
                    lat={trail.latitude}
                    lng={trail.longitude}
                    text={trail.name}
                  />
                );
              })}
            </GoogleMapReact>
          </div>
        ) : (
          false
        )}
      </div>
     
    );
  }
}

export default App;
