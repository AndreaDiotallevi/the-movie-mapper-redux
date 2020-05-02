import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const pathname = props.location.pathname;
  const isHome = pathname === "/";

  const renderPageTitle = () => {
    if (!isHome) {
      const country = pathname.split("%20").join(" ").toUpperCase().slice(1);
      return `WELCOME TO ${country}`;
    }
    return "THE MOVIE MAPPER";
  };

  const renderBackLink = () => {
    if (!isHome)
      return (
        <Link to="/" data-test="back-home-link">
          <i class="arrow-left"></i>
        </Link>
      );
  };

  return (
    <div className="header-component">
      <div className="header-container">
        {renderBackLink()}
        <h1 className="header-title" data-test="header-title">
          {renderPageTitle()}
        </h1>
      </div>
    </div>
  );
};

export default Header;
