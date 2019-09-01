import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './map_marker';
import { geolocated } from "react-geolocated";


class Map extends Component {
  static defaultProps = {
    center: {
      lat: 30.55,
      lng: 22.93
    },
    zoom: 12
  };
 
  render() {

  return !this.props.isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
) : !this.props.isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
) : this.props.coords ? (
    <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API }}
          defaultCenter={{
            lat: this.props.coords.latitude,
            lng: this.props.coords.longitude
          }}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={-33.93812}
            lng={18.468619999999987}
            text="TEST"
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
  ) : (
    <div>Getting the location data&hellip; </div>
);
  }
}

export default geolocated({
  positionOptions: {
      enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Map);