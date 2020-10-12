import React, { useContext } from "react";
import "./GameOver.css";
import { priceContext } from "../../context/priceContext";
import { useHistory } from "react-router-dom";

const GameOver = () => {
  const { prices, setWinPrice } = useContext(priceContext);
  let history = useHistory();
  const handleClick = () => {
    setWinPrice(0);
    history.push("/game");
  };

  return (
    <div className="container ">
      <div className="gameover-page">
        <div className="gameover__img">
          <img src="/image/Group 265.png" alt="img" />
        </div>
        <div className="block-gameover">
          <span className="block-gameover__total">Total score:</span>
          <span className="block-gameover__earned">${prices} earned</span>
          <button className="block-gameover__btn" onClick={handleClick}>
            Try again
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameOver;
