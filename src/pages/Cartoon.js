import React from "react";
import { cartoonData } from "../data/cartoonData";
import Item from "../components/Items";

const Cartoon = () => {
  return (
    <div className="new-container">
      <div className="action-movie">
        <h2>Action Cartoon</h2>
        <div className="movie-items">
          {cartoonData.map((movie) => (
            <Item
              name={movie.name}
              image={movie.image}
              rating={movie.ratign}
              seasons={movie.seasons}
            />
          ))}
        </div>
      </div>
      <div className="romance-movie">
        <h2>Romance Cartoon</h2>
        <div className="movie-items">
          {cartoonData.map((movie) => (
            <Item
              name={movie.name}
              image={movie.image}
              rating={movie.ratign}
              seasons={movie.seasons}
            />
          ))}
        </div>
      </div>
      <div className="comedy-movie">
        <h2>Comedy Cartoon</h2>
        <div className="movie-items">
          {cartoonData.map((movie) => (
            <Item
              name={movie.name}
              image={movie.image}
              rating={movie.ratign}
              seasons={movie.seasons}
            />
          ))}
        </div>
      </div>
      <div className="Thriller-movie">
        <h2>Thriller Cartoon</h2>
        <div className="movie-items">
          {cartoonData.map((movie) => (
            <Item
              name={movie.name}
              image={movie.image}
              rating={movie.ratign}
              seasons={movie.seasons}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cartoon;
