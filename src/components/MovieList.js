import React from "react";
import { connect } from "react-redux";
import { fetchMoviesFromCountry } from "../actions";
import MovieDetail from "./MovieDetail";
import queryString from "query-string";

class MovieList extends React.Component {
  values = queryString.parse(this.props.location.search);

  componentDidMount() {
    const country = this.props.match.params.country
      .split("%20")
      .map((word) => word[0].toUpperCase() + word.slice(1));
    this.props.fetchMoviesFromCountry(country);
  }

  filterMovies = () => {
    const values = queryString.parse(this.props.location.search);

    if (!values["genre"] || values["genre"] === "All") {
      return this.props.movies;
    } else {
      return this.props.movies.filter((movie) =>
        movie.Genre.split(", ").includes(values["genre"])
      );
    }
  };

  render() {
    return (
      <div className="movie-list-component">
        <div className="movie-list-container">
          <ul>
            {this.filterMovies().map((movie) => (
              <MovieDetail
                imdbID={movie.imdbID}
                title={movie.Title}
                plot={movie.Plot}
                posterURL={movie.Poster}
                releaseDate={movie.Released}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.filter((movie) => movie.Error !== "Movie not found!"),
  };
};

export default connect(mapStateToProps, { fetchMoviesFromCountry })(MovieList);
