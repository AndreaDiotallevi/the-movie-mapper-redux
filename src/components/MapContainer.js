import React from "react";
import { Map, GoogleApiWrapper, InfoWindow } from "google-maps-react";
import { connect } from "react-redux";

import { fetchCountryFromClick } from "../actions";
import mapStyles from "../utils/mapStyles";

const MapContainer = (props) => {
  const _mapLoaded = (mapProps, map) => {
    map.setOptions({
      styles: mapStyles,
    });
  };

  return (
    <div>
      <Map
        google={props.google}
        zoom={2.4}
        onClick={(t, map, coord) => props.fetchCountryFromClick(t, map, coord)}
        initialCenter={{
          lat: 15,
          lng: 0,
        }}
        onReady={(mapProps, map) => _mapLoaded(mapProps, map)}
      >
        <InfoWindow
          position={{
            lat: props.clickedCoordinates[0],
            lng: props.clickedCoordinates[1],
          }}
          visible={props.infoWindowOn}
        >
          <div>
            <p>No Movies Under The Sea</p>
          </div>
        </InfoWindow>
      </Map>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    clickedCoordinates: state.clickedCoordinates,
    infoWindowOn: state.infoWindowOn,
  };
};

const mapDispatchToProps = { fetchCountryFromClick };

const wrappedMap = GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API,
})(MapContainer);

export default connect(mapStateToProps, mapDispatchToProps)(wrappedMap);
