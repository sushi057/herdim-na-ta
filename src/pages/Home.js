import React from "react";
import Carousel from "../components/Carousel";
import Popular from "../components/Popular";
import User from "../components/User";
import Friends from "../components/Friends";
import "../styles/home.css";

function Home() {
  return (
    <>
      <Carousel />
      <Popular />
      <User />
      {/* <Friends /> */}
    </>
  );
}

export default Home;
