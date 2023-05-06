import React from "react";
import "../styles/items.css";

const Item = ({ image, name, rating, seasons }) => {
  return (
    <div className="item-container">
      <div className="item-image">
        <img src={image} alt={name} />
      </div>
      <div className="item-info">
        <div className="item-details">
          <div className="item-rating">{rating}</div>
          {seasons && (
            <div className="item-seasons">{seasons} Seasons</div>
          )}{" "}
        </div>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Item;
