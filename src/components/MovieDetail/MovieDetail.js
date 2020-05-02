import React from "react";
import noPhotoAvailable from "../../assets/no-photo-available.jpg";

const MovieDetail = ({ imdbID, title, plot, posterURL, releaseDate }) => {
  const handleImageUrlError = (event) => {
    event.target.src = noPhotoAvailable;
  };

  return (
    <li className="movie" key={imdbID}>
      <div className="movie-image">
        <a
          href={`https://www.imdb.com/title/${imdbID}/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="movie-poster"
            data-test={`movie-poster-url-${imdbID}`}
            alt={`movie-poster-url-${imdbID}`}
            src={`${posterURL}`}
            onError={handleImageUrlError}
          ></img>
        </a>
      </div>
      <div className="movie-info">
        <div className="title-plot-container">
          <div className="movie-title-container">
            <a
              className="movie-title-anchor"
              data-test={`movie-title-anchor-${imdbID}`}
              href={`https://www.imdb.com/title/${imdbID}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="movie-title" data-test={`movie-title-${imdbID}`}>
                {title}
              </h2>
            </a>
          </div>
          <p className="movie-plot" data-test={`movie-plot-${imdbID}`}>
            {plot}
          </p>
        </div>
        <div className="date-rating-container">
          <p
            className="movie-release-date"
            data-test={`movie-release-date-${imdbID}`}
          >
            <span className="movie-release-date-title"></span>
            {releaseDate}
          </p>
        </div>
      </div>
    </li>
  );
};

export default MovieDetail;
