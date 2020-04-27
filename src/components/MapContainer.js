import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import { connect } from "react-redux";

import { fetchMoviesFromClick } from "../actions";
import mapStyles from "../utils/mapStyles";

class MapContainer extends React.Component {
  _mapLoaded(mapProps, map) {
    map.setOptions({
      styles: mapStyles,
    });
  }

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={2.4}
          onClick={(t, map, coord) =>
            this.props.fetchMoviesFromClick(t, map, coord)
          }
          initialCenter={{
            lat: 15,
            lng: 0,
          }}
          onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
        >
          {/* <InfoWindow
            position={{
              lat: this.props.onClickCoordinates[0],
              lng: this.props.onClickCoordinates[1],
            }}
            visible={this.props.infoWindowVisible}
          >
            <div>
              <h4>There are no movies for this country</h4>
            </div>
          </InfoWindow> */}
        </Map>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    clickedCoordinates: state.clickedCoordinates,
  };
};

export default connect(mapStateToProps, { fetchMoviesFromClick })(
  GoogleApiWrapper({
    apiKey: process.env.REACT_APP_MAPS_API,
  })(MapContainer)
);
