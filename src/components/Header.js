import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearMovies } from "../actions";

import leftArrow from "../assets/left-arrow.png";

const Header = (props) => {
  const renderPageTitle = () => {
    if (props.location.pathname === "/") {
      return "THE MOVIE MAPPER";
    } else {
      return `WELCOME TO ${props.country.toUpperCase()}`;
    }
  };

  const renderBackArrow = () => {
    if (props.location.pathname !== "/") {
      return (
        <Link to="/" onClick={props.clearMovies}>
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

const mapStateToProps = (state) => {
  return { country: state.fetchedCountry };
};

export default connect(mapStateToProps, { clearMovies })(Header);
