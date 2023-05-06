import React from "react";
import { tvData } from "../data/tvData";
import Item from "../components/Items";

const Cartoon = () => {
  return (
    <div className="new-container">
      <div className="action-movie">
        <h2>Action Series</h2>
        <div className="movie-items">
          {tvData.map((movie) => (
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
        <h2>Romance Series</h2>
        <div className="movie-items">
          {tvData.map((movie) => (
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
        <h2>Comedy Series</h2>
        <div className="movie-items">
          {tvData.map((movie) => (
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
        <h2>Thriller Series</h2>
        <div className="movie-items">
          {tvData.map((movie) => (
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
