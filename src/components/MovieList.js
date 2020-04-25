import React from "react";

import { connect } from "react-redux";

const MovieList = (props) => {
  return (
    <div>
      <ul>
        {props.movies.map((movie) => (
          <li>{movie.Title}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies.filter((movie) => movie.Error !== "Movie not found!"),
  };
};

export default connect(mapStateToProps)(MovieList);
