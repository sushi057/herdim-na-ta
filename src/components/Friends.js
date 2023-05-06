import React from "react";
import "../styles/friends.css";

const Friends = () => {
  return (
    <div className="friends-container">
      <div className="friends-header">Friends Watching</div>
      <div className="friends-list">
        <div className="friend">
          <div className="friend-name">Sandesh</div>
          <div className="friend-show">
            <img
              src="https://m.media-amazon.com/images/I/81R7QZV5P1L._AC_UF894,1000_QL80_.jpg"
              alt="The Office"
              className="friend-show-image"
            />
            <div className="friend-show-name">The Office</div>
          </div>
        </div>
        <div className="friend">
          <div className="friend-name">Prayag</div>
          <div className="friend-show">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg"
              alt="Friends"
              className="friend-show-image"
            />
            <div className="friend-show-name">Friends</div>
          </div>
        </div>
        <div className="friend">
          <div className="friend-name">Prakriti</div>
          <div className="friend-show">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
              alt="Stranger Things"
              className="friend-show-image"
            />
            <div className="friend-show-name">Stranger Things</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
