import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="main-logo" className="main-logo" />
        </Link>
      </div>
      <div className="links">
        <Link to="/new">New</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/shows">Shows</Link>
        <Link to="/cartoon">Cartoon</Link>
        <Link to="/search">Search</Link>
        <Link to="/user">User</Link>
      </div>
    </nav>
  );
};

export default Header;
