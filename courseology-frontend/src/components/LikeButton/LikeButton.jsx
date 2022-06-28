import React, { useState } from "react";
import "./LikeButton.scss";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - -1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };

  return (
    <button className="like-button" onClick={handleClick}>
      <span className="like-button__counter">{`👍 ${likes}`}</span>
    </button>
  );
};

export default LikeButton;
