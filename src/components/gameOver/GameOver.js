import React from "react";
import "./GameOver.css";

const GameOver = () => {
  return (
    <div className="container ">
      <div className="gameover-page">
        <div className="gameover__img">
          <img src="/image/Group 265.png" alt="img" />
        </div>
        <div className="block-gameover">
          <span className="block-gameover__total">Total score:</span>
          <span className="block-gameover__earned">$8,000 earned</span>
          <button className="block-gameover__btn">Try again</button>
        </div>
      </div>
    </div>
  );
};

export default GameOver;
