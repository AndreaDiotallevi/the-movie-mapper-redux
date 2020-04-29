import React from "react";
import { Link } from "react-router-dom";
import leftArrow from "../assets/left-arrow.png";

const Header = (props) => {
  const { pathname } = props.location;

  const renderPageTitle = () => {
    if (pathname === "/") {
      return "THE MOVIE MAPPER";
    } else {
      const country = pathname.split("%20").join(" ").toUpperCase().slice(1);
      return `WELCOME TO ${country}`;
    }
  };

  const renderBackArrow = () => {
    if (pathname !== "/") {
      return (
        <Link to="/">
          <p>
            <img
              className="back-home-link"
              src={leftArrow}
              alt="back-home-link"
            ></img>
          </p>
        </Link>
      );
    }
  };

  return (
    <div className="header-component">
      <div className="header-container">
        {renderBackArrow()}
        <h1 className="header-title" data-test="movie-country-message">
          {renderPageTitle()}
        </h1>
      </div>
    </div>
  );
};

export default Header;
