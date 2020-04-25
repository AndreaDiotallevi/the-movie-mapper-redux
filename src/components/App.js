import React from "react";
import MapContainer from "./MapContainer";
import { connect } from "react-redux";
import { fetchMoviesFromClick } from "../actions";

const App = (props) => {
  const handleCountryClick = (t, map, coord) => {
    props.fetchMoviesFromClick(t, map, coord);
  };

  return (
    <div>
      <MapContainer onCountryClick={handleCountryClick} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    clickedCoordinates: state.clickedCoordinates,
    movies: state.movies.filter((movie) => movie.Error != "Movie not found!"),
  };
};

export default connect(mapStateToProps, { fetchMoviesFromClick })(App);
