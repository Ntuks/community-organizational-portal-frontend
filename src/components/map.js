import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './map_marker';

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBgJt7BUuH480oR5E8LDZMoW-3AoX3Zi64' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={59.955413}
            lng={30.337844}
            text="SPCA"
          />
          <Marker
            lat={65.955413}
            lng={35.337844}
            text=""
          />
          <Marker
            lat={20.955413}
            lng={15.337844}
            text="CANSA"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;