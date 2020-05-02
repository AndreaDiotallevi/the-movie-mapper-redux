import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { pathname } = props.location;
  const isHome = pathname === "/";

  const renderPageTitle = () => {
    if (!isHome) {
      const country = pathname.split("%20").join(" ").toUpperCase().slice(1);
      return `WELCOME TO ${country}`;
    }
    return "THE MOVIE MAPPER";
  };

  const renderBackArrow = () => {
    if (!isHome)
      return (
        <Link to="/">
          <i class="arrow-left"></i>
        </Link>
      );
  };

  return (
    <div className="header-component">
      <div className="header-container">
        {renderBackArrow()}
        <h1 className="header-title">{renderPageTitle()}</h1>
      </div>
    </div>
  );
};

export default Header;
