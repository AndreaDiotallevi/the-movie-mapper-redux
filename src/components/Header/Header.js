import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const pathname = props.history.location.pathname;
  const isHome = pathname === "/";

  const renderPageTitle = () => {
    if (!isHome) {
      const country = pathname.split("%20").join(" ").toUpperCase().slice(1);
      return `WELCOME TO ${country}`;
    }
    return "THE MOVIE MAPPER";
  };

  return (
    <div className="header-component">
      <div className="header-container">
        {!isHome && (
          <Link to="/" data-test="back-home-link">
            <i className="arrow-left"></i>
          </Link>
        )}
        <h1 className="header-title" data-test="header-title">
          {renderPageTitle()}
        </h1>
      </div>
    </div>
  );
};

export default Header;
