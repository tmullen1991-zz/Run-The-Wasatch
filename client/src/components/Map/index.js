import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import API from "../../utils/api";
import Marker from "../Marker";
import InfoBox from "../MapInfoBox/info-box";

class App extends Component {
  state = {
    trails: [],
    currentTrail: {},
    center: {
      lat: 40.709,
      lng: -111.799
    },
    zoom: 11,
    showInfo: false
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

  _onClick = trail => {
    return (
      this.setState({
        currentTrail: {
          trail 
        }
      }),
      this.setState({ showInfo: true })
    );
  };

  _onClose = ()=>{
    return(
    this.setState({ showInfo: false })
    )
  }

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
              yesIWantToUseGoogleMapApiInternals
            >
              {this.state.trails.map(trail => {
                return (
                  <Marker
                    onClick={() => this._onClick(trail)}
                    key={trail.id}
                    lat={trail.latitude}
                    lng={trail.longitude}
                    text={trail.name}
                    difficulty={trail.name}
                    length={trail.length}
                  />
                );
              })}
              {this.state.showInfo ? (
                <InfoBox
                  lat={this.state.currentTrail.trail.latitude}
                  lng={this.state.currentTrail.trail.longitude}
                  url={this.state.currentTrail.trail.url}
                  rating={this.state.currentTrail.trail.stars}
                  votes={this.state.currentTrail.trail.starVotes}
                  name={this.state.currentTrail.trail.name}
                  difficulty={this.state.currentTrail.trail.difficulty}
                  length={this.state.currentTrail.trail.length}
                />
              ) : null}
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
