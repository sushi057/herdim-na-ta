import React from "react";
import Item from "../components/Items";
import { newMoviesData, newSeriesData, newCartoonsData } from "../data/newData";
import "../styles/new.css";

const New = () => {
  return (
    <div className="new-container">
      <div className="new-section-movies">
        <h2>New Movies</h2>
        <div className="new-items">
          {newMoviesData.map((movie) => (
            <Item
              key={movie.id}
              image={movie.image}
              name={movie.name}
              rating={movie.rating}
              seasons={movie.seasons}
            />
          ))}
        </div>
      </div>
      <div className="new-section-series">
        <h2>New Series</h2>
        <div className="new-items">
          {newSeriesData.map((series) => (
            <Item
              key={series.id}
              image={series.image}
              name={series.name}
              rating={series.rating}
              seasons={series.seasons}
            />
          ))}
        </div>
      </div>
      <div className="new-section-cartoon">
        <h2>New Cartoons</h2>
        <div className="new-items">
          {newCartoonsData.map((cartoon) => (
            <Item
              key={cartoon.id}
              image={cartoon.image}
              name={cartoon.name}
              rating={cartoon.rating}
              seasons={cartoon.seasons}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default New;
