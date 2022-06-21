import React from "react";
import "./Gain.css";
import data from "../../data.json";
import HelpButton from "../helpButton/HelpButton";

const Gain = (props) => {
const {
  onhandleGroupeHelp,
  onHandleHalf,
  showChartAnswer,
  isCompleted,
  isCompletedРHalf,
} = props;
// console.log(props);
  const arr = [...[], ...data];
  return (
    <div className="container">
      <div className="block-gain slideInRight">
        {props.isMobile && (
          <button
            onClick={props.togleMenu}
            type="button"
            className="btn-close"
          ></button>
        )}
        <ul className="gain">
          {arr
            .sort((a, b) => b.price - a.price)
            .map((elem) => (
              <li key={elem.id} id={"answer" + elem.id} className="gain-item">
                <svg
                  className={
                    props.data.includes(elem.id)
                      ? "svg-gain-change"
                      : "svg-gain"
                  }
                  viewBox="0 0 240 40"
                >
                  <path d="M13.4526 4.63788C15.6376 2.01596 18.8742 0.5 22.2872 0.5H217.713C221.126 0.5 224.362 2.01597 226.547 4.63788L239.349 20L226.547 35.3621C224.362 37.984 221.126 39.5 217.713 39.5H22.2872C18.8742 39.5 15.6376 37.984 13.4526 35.3621L0.650853 20L13.4526 4.63788Z" />
                </svg>
                <p>${elem.price}</p>
              </li>
            ))}
        </ul>
        <HelpButton
          onHandleGroupeHelp={onhandleGroupeHelp}
          onHandleHalf={onHandleHalf}
          showChartAnswer={showChartAnswer}
          isCompleted={isCompleted}
          isCompletedРHalf={isCompletedРHalf}
        />
      </div>
    </div>
  );
};

export default Gain;
