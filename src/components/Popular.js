import React from "react";
import popularData from "../data/popularData";
import Items from "./Items";
import "../styles/popular.css";

const Popular = () => {
  return (
    <div className="popular-container">
      <h2>Popular Shows</h2>
      <div className="popular-list">
        {popularData.map((show) => (
          <Items
            key={show.id}
            image={show.image}
            name={show.name}
            rating={show.rating}
            seasons={show.seasons}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
