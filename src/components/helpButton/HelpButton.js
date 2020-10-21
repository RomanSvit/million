import React from "react";
import "./HelpButton.css";

const HelpButton = (props) => {
 
  return (
    <div className="block-button">
      <button
        className="btn-half btn "
        onClick={props.onHandleHalf}
      ></button>
      <button
        className="btn-helpGroup btn completed"
        onClick={props.onHandleGroupeHelp}
      ></button>
    </div>
  );
};

export default HelpButton;
