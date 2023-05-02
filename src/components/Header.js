import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import logo from "../images/logo.png";
import searchButton from "../images/search-logo.png";
import userButton from "../images/user-logo.png";

const Header = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="main-logo" className="main-logo" />
        </Link>
        <div className="links-left">
          <Link to="/new">New</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/shows">Shows</Link>
          <Link to="/cartoon">Cartoon</Link>
        </div>
      </div>
      <div className="links-right">
        <Link to="/search">
          <img src={searchButton} alt="search button" id="search-button" />
        </Link>
        <Link to="/user">
          <img src={userButton} alt="user button" id="user-button" />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
