import React from "react";
import { Map, GoogleApiWrapper, InfoWindow } from "google-maps-react";
import { connect } from "react-redux";

import { fetchCountryFromClick } from "../actions";
import mapStyles from "../utils/mapStyles";

class MapContainer extends React.Component {
  _mapLoaded(mapProps, map) {
    map.setOptions({
      styles: mapStyles,
    });
  }

  handleMapClick(t, map, coord) {
    this.props.fetchCountryFromClick(t, map, coord);
  }

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={2.4}
          onClick={(t, map, coord) => this.handleMapClick(t, map, coord)}
          initialCenter={{
            lat: 15,
            lng: 0,
          }}
          onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
        >
          <InfoWindow
            position={{
              lat: this.props.clickedCoordinates[0],
              lng: this.props.clickedCoordinates[1],
            }}
            visible={this.props.infoWindowOn}
          >
            <div>
              <p>No movies under the sea</p>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    clickedCoordinates: state.clickedCoordinates,
    infoWindowOn: state.infoWindowOn,
  };
};

const wrappedMap = GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API,
})(MapContainer);

export default connect(mapStateToProps, {
  fetchCountryFromClick,
})(wrappedMap);
