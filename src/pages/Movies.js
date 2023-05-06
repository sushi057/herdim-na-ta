import React from "react";
import Item from "../components/Items";
import { moviesData } from "../data/movieData";
import "../styles/movies.css";

const Movies = () => {
  return (
    <div className="new-container">
      <div className="action-movie">
        <h2>Action Movies</h2>
        <div className="movie-items">
          {moviesData.map((movie) => (
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
        <h2>Romance Movies</h2>
        <div className="movie-items">
          {moviesData.map((movie) => (
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
        <h2>Comedy Movies</h2>
        <div className="movie-items">
          {moviesData.map((movie) => (
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
        <h2>Thriller Movies</h2>
        <div className="movie-items">
          {moviesData.map((movie) => (
            <Item
              name={movie.name}
              image={movie.image}
              rating={movie.ratign}
              seasons={movie.seasons}
            />
          ))}
        </div>
      </div>
      <div className="age-movie">
        <h2>Coming of Age Movies</h2>
        <div className="movie-items">
          {moviesData.map((movie) => (
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

export default Movies;
