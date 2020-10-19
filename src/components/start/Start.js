import React from "react";
import "./Start.css";
import { useHistory } from "react-router-dom";

const Start = () => {
  let history = useHistory();
  const handleStartSubmit = () => {
    history.push("/game");
  };

  return (
    <div className="container ">
      <div className="start-page">
        <div className="start-page__img">
          <img src="/image/logo.png" alt="img" />
        </div>
        <div className="block-begin">
          <h1 className="block-begin__title">Who wants to be a millionaire?</h1>
          <button
            className="block-begin__btn"
            type="button"
            onClick={handleStartSubmit}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
