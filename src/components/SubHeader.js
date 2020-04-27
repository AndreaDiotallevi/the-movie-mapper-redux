import React from "react";

const genreList = [
  "Action",
  "Comedy",
  "Crime",
  "Drama",
  "Romance",
  "Sci-Fi",
  "Thriller",
];

const SubHeader = (props) => {
  const renderGenreButtons = () => {
    if (props.location.pathname !== "/") {
      return (
        <div className="genre-buttons">
          {genreList.map((genre, index) => (
            <button
              className="genre-button"
              value={genre}
              onClick={handleGenreChoice}
              data-test={`genre-button-${genre.toLocaleLowerCase()}`}
              key={index}
            >
              {genre}
            </button>
          ))}
          <button
            value={"All"}
            className="genre-button"
            onClick={handleGenreChoice}
          >
            All
          </button>
        </div>
      );
    } else {
      return (
        <div className="sub-header-description">
          <p>Click on a country and find the best movies from that country!</p>
        </div>
      );
    }
  };

  const handleGenreChoice = () => {};

  return <div className="sub-header-component">{renderGenreButtons()}</div>;
};

export default SubHeader;
