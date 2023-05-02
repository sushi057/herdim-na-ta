import React from "react";
import popularData from "../data/popularData";
import "../styles/popular.css";

const Popular = () => {
  console.log(popularData);
  return (
    <div className="popular-container">
      <h2>Popular Shows</h2>
      <div className="popular-list">
        {popularData.map((show) => (
          <div key={show.id} className="popular-item">
            <div className="popular-item-image">
              <img src={show.image} alt={show.name} />
            </div>
            <div className="popular-item-info">
              <h3>{show.name}</h3>
              <div className={`popular-item-rating bg-yellow`}>
                {show.rating}
              </div>
              <div className="popular-item-seasons">{show.seasons} Seasons</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
