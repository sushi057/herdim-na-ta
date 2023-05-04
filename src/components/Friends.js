import React from "react";
import "../styles/friends.css";

const Friends = () => {
  return (
    <div className="friends-container">
      <div className="friends-header">Friends</div>
      <div className="friend">
        <div className="friend-name">Sandesh</div>
        <div className="friend-show">
          <img
            src="https://i.imgur.com/vBvV7T2.jpg"
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
            src="https://i.imgur.com/W6VPy8W.jpg"
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
            src="https://i.imgur.com/60Gp5Sb.jpg"
            alt="Stranger Things"
            className="friend-show-image"
          />
          <div className="friend-show-name">Stranger Things</div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
