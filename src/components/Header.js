import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearMovies } from "../actions";

import leftArrow from "../assets/left-arrow.png";

const Header = (props) => {
  return (
    <div className="header-component">
      <div className="header-container">
        <Link to="/" onClick={props.clearMovies}>
          <p>
            <img
              className="back-home-link"
              src={leftArrow}
              alt="back-home-link"
            ></img>
          </p>
        </Link>
        <h1 className="header-title" data-test="movie-country-message">
          WELCOME TO {props.country.toUpperCase()}
        </h1>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { country: state.fetchedCountry };
};

export default connect(mapStateToProps, { clearMovies })(Header);
