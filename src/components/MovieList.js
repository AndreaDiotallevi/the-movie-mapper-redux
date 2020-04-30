import React from "react";
import { connect } from "react-redux";
import MovieDetail from "./MovieDetail";
import { fetchMoviesFromCountry } from "../actions";
import queryString from "query-string";

class MovieList extends React.Component {
  componentDidMount() {
    this.props.fetchMoviesFromCountry(this.getCountryFromUrl());
  }

  getCountryFromUrl() {
    return this.props.match.params.country
      .split("%20")
      .map((word) => word[0].toUpperCase() + word.slice(1));
  }

  filterMoviesByGenre = () => {
    const selectedGenre = queryString.parse(this.props.location.search)[
      "genre"
    ];

    if (!selectedGenre || selectedGenre === "All") {
      return this.props.movies;
    } else {
      return this.props.movies.filter((movie) =>
        movie.Genre.split(", ").includes(selectedGenre)
      );
    }
  };

  renderList() {
    return (
      <ul>
        {this.filterMoviesByGenre().map((movie) => (
          <MovieDetail
            key={movie.imdbID}
            imdbID={movie.imdbID}
            title={movie.Title}
            plot={movie.Plot}
            posterURL={movie.Poster}
            releaseDate={movie.Released}
          />
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="movie-list-component">
        <div className="movie-list-container">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.filter((movie) => movie.Error !== "Movie not found!"),
  };
};

const mapDispatchToProps = { fetchMoviesFromCountry };

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
