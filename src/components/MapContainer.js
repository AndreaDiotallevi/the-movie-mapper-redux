import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends React.Component {
  _mapLoaded(mapProps, map) {
    map.setOptions({
      styles: mapStyle,
    });
  }

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          style={this.props.mapStyles}
          zoom={2.4}
          onClick={this.props.onCountryClick}
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

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API,
})(MapContainer);

const mapStyle = [
  {
    featureType: "all",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [
      {
        saturation: 100,
      },
      {
        color: "#000000",
      },
      {
        lightness: 100,
      },
      {
        visibility: "on",
      },
      {
        "font-family": "Work Sans",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "geometry.stroke",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: "#FFFFFF",
      },
      {
        lightness: 100,
      },
      {
        weight: 0.35,
      },
    ],
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: "#4d6059",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#38444C",
      },
      {
        visibility: "on",
      },
    ],
  },
];
