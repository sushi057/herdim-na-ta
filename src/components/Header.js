import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Herdim Na Ta</Link>
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
