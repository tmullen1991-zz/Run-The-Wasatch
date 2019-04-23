import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.7608,
      lng: -111.8910
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '500px', width: '500px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: ""}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={40.7608}
            lng={-111.891}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;
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