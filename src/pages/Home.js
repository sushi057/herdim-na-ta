import React from "react";
import Carousel from "../components/Carousel";
import Popular from "../components/Popular";
import User from "../components/User";
import Friends from "../components/Friends";
import "../styles/home.css";

function Home() {
  return (
    <div className="homepage">
      <div className="left-side">
        <Carousel />
        <Popular />
      </div>
      <div className="right-side">
        <User />
        <Friends />
      </div>
    </div>
  );
}

export default Home;
