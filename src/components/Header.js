import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import leftArrow from "../assets/left-arrow.png";

const Header = (props) => {
  return (
    <div className="header-component">
      <Link to="/">
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
  );
};

const mapStateToProps = (state) => {
  return { country: state.fetchedCountry };
};

export default connect(mapStateToProps)(Header);
