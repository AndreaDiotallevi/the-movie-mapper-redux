import React from "react";
import MapContainer from "./MapContainer";
import { connect } from "react-redux";
import { clickCoordinatesAndFetchCountry } from "../actions";

const App = (props) => {
  const handleCountryClick = (t, map, coord) => {
    props.clickCoordinatesAndFetchCountry(t, map, coord);
  };

  return (
    <div>
      <MapContainer onCountryClick={handleCountryClick} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { clickedCoordinates: state.clickedCoordinates };
};

export default connect(mapStateToProps, { clickCoordinatesAndFetchCountry })(
  App
);
