import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import "../css/Header.css";

function Header() {
  return (
    <div className="header">
      <img
        src="https://www.brandeps.com/logo-download/A/Airbnb-logo-vector-01.svg"
        alt="headerIcon"
        className="header__icon"
      />
      <div className="header__center">
        <input type="text" className="text" />
        <SearchIcon />
      </div>

      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
