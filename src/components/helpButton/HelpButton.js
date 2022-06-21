import React, { useEffect } from "react";
import "./HelpButton.css";

const HelpButton = ({
  onHandleGroupeHelp,
  onHandleHalf,
  isCompleted,
  isCompletedРHalf,
}) => {
  useEffect(() => {
    const elem = document.querySelector(".btn-helpGroup");
    if (isCompleted) {
      elem.setAttribute("disabled", "true");
    }
  }, [isCompleted]);
  
  useEffect(() => {
    const elem2 = document.querySelector(".btn-half");
    if (isCompletedРHalf) {
      elem2.setAttribute("disabled", "true");
    }
  }, [isCompletedРHalf]);

  return (
    <div className="block-button">
      <button
        className={
          !isCompletedРHalf ? "btn-half btn " : "btn-half btn-remove completed"
        }
        onClick={onHandleHalf}
      ></button>
      <button
        className={
          !isCompleted
            ? "btn-helpGroup btn"
            : "btn-helpGroup btn-remove completed"
        }
        onClick={onHandleGroupeHelp}
      ></button>
    </div>
  );
};

export default HelpButton;
