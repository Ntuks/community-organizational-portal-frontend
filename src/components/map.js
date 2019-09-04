import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import GoogleMapReact from 'google-map-react';
import Marker from './map_marker';
import { geolocated } from "react-geolocated";
import { OrganizationsBySearch } from '../selectors/organisations';

class Map extends Component {

  componentDidUpdate() {
    console.log('munted');
    console.log(this.props.organisations);
  }
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
          
            {
              this.props.organisations.map((org) => {
                return (
                  <Marker
                    key={org._id}
                    lat={org.coordinates.lat}
                    lng={org.coordinates.lng}
                    text={org.title}
                  />
                )
              })
            }
          
          
          {/* <Marker
            lat={-33.9248685}
            lng={18.424055299999964}
            text="TEST"
          /> */}
  
        </GoogleMapReact>
      </div>
  ) : (
    <div>Getting the location data&hellip; </div>
);
  }
}

const mapStateToProps = (state) => ({
  organisations: OrganizationsBySearch(state.organisations, state.filters)
});

const enhance = compose(
  geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  }),
  connect(mapStateToProps),
)
export default enhance(Map);