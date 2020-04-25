import React from "react";
import MapContainer from "./MapContainer";
import { connect } from "react-redux";
import { clickCoordinates } from "../actions";

const App = (props) => {
  const handleCountryClick = (t, map, coord) => {
    props.clickCoordinates(t, map, coord);
  };

  return (
    <div>
      <div>{props.clickedCoordinates}</div>
      <MapContainer onCountryClick={handleCountryClick} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { clickedCoordinates: state.clickedCoordinates };
};

export default connect(mapStateToProps, { clickCoordinates })(App);
