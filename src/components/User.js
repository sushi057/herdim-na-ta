import React from "react";
import "../styles/user.css";

const User = () => {
  return (
    <div className="user-container">
      <div className="user-profile">
        <img src="https://via.placeholder.com/150" alt="User Profile" />
        <div className="user-details">
          <h3>John Doe</h3>
          <p>john.doe@gmail.com</p>
        </div>
      </div>
      <div className="user-sections">
        <div className="user-section">
          <h4>New Episodes</h4>
          <div className="user-shows">
            <div className="user-show">
              <img src="https://via.placeholder.com/200" alt="Show" />
              <p>Game of Thrones</p>
            </div>
            <div className="user-show">
              <img src="https://via.placeholder.com/200" alt="Show" />
              <p>The Walking Dead</p>
            </div>
            <div className="user-show">
              <img src="https://via.placeholder.com/200" alt="Show" />
              <p>Breaking Bad</p>
            </div>
          </div>
        </div>
        <div className="user-section">
          <h4>Continue Watching</h4>
          <div className="user-shows">
            <div className="user-show">
              <img src="https://via.placeholder.com/200" alt="Show" />
              <p>Stranger Things</p>
            </div>
            <div className="user-show">
              <img src="https://via.placeholder.com/200" alt="Show" />
              <p>The Crown</p>
            </div>
            <div className="user-show">
              <img src="https://via.placeholder.com/200" alt="Show" />
              <p>Narcos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
