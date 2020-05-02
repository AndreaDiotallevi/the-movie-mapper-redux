import React from "react";
import history from "../../history";
import genreList from "../../utils/genreList";

const SubHeader = (props) => {
  const pathname = props.history.location.pathname;

  const handleGenreChoice = (genre) => {
    history.push({
      pathname: `${pathname}`,
      search: `?genre=${genre}`,
    });
  };

  const renderGenreButtons = () => {
    if (pathname !== "/") {
      return (
        <div className="genre-buttons" data-test="genre-buttons">
          {genreList.map((genre) => (
            <button
              className="genre-button"
              value={genre}
              onClick={() => handleGenreChoice(genre)}
              key={genre}
            >
              {genre}
            </button>
          ))}
        </div>
      );
    } else {
      return (
        <div
          className="sub-header-description"
          data-test="sub-header-description"
        >
          <p>Click on a country and find the best movies from that country!</p>
        </div>
      );
    }
  };

  return <div className="sub-header-component">{renderGenreButtons()}</div>;
};

export default SubHeader;
