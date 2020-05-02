import React from "react";
import history from "../../history";
import genreList from "../../utils/genreList";

const SubHeader = (props) => {
  const handleGenreChoice = (genre) => {
    history.push({
      pathname: `${props.location.pathname}`,
      search: `?genre=${genre}`,
    });
  };

  const renderGenreButtons = () => {
    if (props.location.pathname !== "/") {
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
