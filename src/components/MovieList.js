import React from "react";
import { connect } from "react-redux";
import { fetchMoviesFromCountry } from "../actions";
import queryString from "query-string";

import noPhotoAvailable from "../assets/no-photo-available.jpg";

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
    console.log(values["genre"]);

    if (!values["genre"] || values["genre"] === "All") {
      return this.props.movies;
    } else {
      return this.props.movies.filter((movie) =>
        movie.Genre.split(", ").includes(values["genre"])
      );
    }
    // return this.props.movies;
    // if (selectedGenre === "All" || selectedGenre === null) {
    //   return this.props.movies;
    // } else {
    //   return this.props.movies.filter((movie) =>
    //     movie.genreList.includes(this.state.selectedGenre)
    //   );
    // }
  };

  handleImageUrlError = (event) => {
    event.target.src = noPhotoAvailable;
  };

  render() {
    return (
      <div className="movie-list-component">
        <div className="movie-list-container">
          <ul>
            {this.filterMovies().map((movie, index) => (
              <li
                className="movie"
                data-test={`movie-${movie.imdbID}`}
                key={index}
              >
                <div className="movie-image">
                  <a
                    href={`https://www.imdb.com/title/${movie.imdbID}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="movie-poster"
                      data-test={`movie-poster-url-${movie.imdbID}`}
                      alt={`movie-poster-url-${movie.imdbID}`}
                      src={`${movie.Poster}`}
                      onError={this.handleImageUrlError}
                    ></img>
                  </a>
                </div>
                <div className="movie-info">
                  <div className="title-plot-container">
                    <div className="movie-title-container">
                      <a
                        className="movie-title-anchor"
                        href={`https://www.imdb.com/title/${movie.imdbID}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h2
                          className="movie-title"
                          data-test={`movie-title-${movie.imdbID}`}
                        >
                          {movie.Title.toUpperCase()}
                        </h2>
                      </a>
                    </div>
                    <p
                      className="movie-plot"
                      data-test={`movie-plot-${movie.imdbID}`}
                    >
                      {movie.Plot}
                    </p>
                  </div>
                  <div className="date-rating-container">
                    <p
                      className="movie-release-date"
                      data-test={`movie-release-date-${movie.imdbID}`}
                    >
                      <span className="movie-release-date-title"></span>
                      {movie.Released}
                    </p>
                  </div>
                </div>
              </li>
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
