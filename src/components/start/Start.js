import React from "react";
import "./Start.css";

const Start = () => {
  return (
    <div className="container start-page">
      <div className="start-page__img">
        <img src="/image/Group 265.png" alt="img" />
      </div>
      <div className="block-begin">
        <h1 className="block-begin__title">Who wants to be a millionaire?</h1>
        <button className="block-begin__btn">Start</button>
      </div>
    </div>
  );
};

export default Start;
