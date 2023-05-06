import React from "react";
import "../styles/user.css";

const User = () => {
  return (
    <div className="user-container">
      <div className="user-profile">
        <img
          src="https://play-lh.googleusercontent.com/iG7IMXCYgqDi9-hcIPCEJLJP2xnvjQZkEZosAS8eQohqC70XYz5QMsCUzMnq5j9jxM2Z=w300"
          alt="User Profile"
        />
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
              <img
                src="https://upload.wikimedia.org/wikipedia/en/e/e0/Game_of_Thrones_Season_8.png"
                alt="Show"
              />
              <p>Game of Thrones</p>
            </div>
            <div className="user-show">
              <img
                src="https://pbs.twimg.com/media/FiLu2CyVUAID-Ut.jpg:large"
                alt="Show"
              />
              <p>The Walking Dead</p>
            </div>
            <div className="user-show">
              <img
                src="https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg"
                alt="Show"
              />
              <p>Breaking Bad</p>
            </div>
          </div>
        </div>
        <div className="user-section">
          <h4>Continue Watching</h4>
          <div className="user-shows">
            <div className="user-show">
              <img
                src="https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
                alt="Show"
              />
              <p>Stranger Things</p>
            </div>
            <div className="user-show">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/The_Crown_season_2.jpeg/220px-The_Crown_season_2.jpeg"
                alt="Show"
              />
              <p>The Crown</p>
            </div>
            <div className="user-show">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/1/11/Narcos_season_3.png"
                alt="Show"
              />
              <p>Narcos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
