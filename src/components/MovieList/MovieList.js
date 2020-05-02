import React from "react";
import { connect } from "react-redux";
import MovieDetail from "../MovieDetail/MovieDetail";
import { fetchMovieTitlesAndMovieData } from "../../actions";
import queryString from "query-string";

class MovieList extends React.Component {
  componentDidMount() {
    this.props.fetchMovieTitlesAndMovieData(this.getCountryFromUrl());
  }

  getCountryFromUrl() {
    return this.props.match.params.country
      .split("%20")
      .map((word) => word[0].toUpperCase() + word.slice(1));
  }

  filterMovies = () => {
    const values = queryString.parse(this.props.history.location.search);

    if (!values["genre"] || values["genre"] === "All") {
      return this.props.movies;
    } else {
      return this.props.movies.filter((movie) =>
        movie.Genre.split(", ").includes(values["genre"])
      );
    }
  };

  renderList() {
    return (
      <ul>
        {this.filterMovies().map((movie) => (
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

export default connect(mapStateToProps, { fetchMovieTitlesAndMovieData })(
  MovieList
);
