/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from "react";
import Gain from "../gain/Gain";
import "./Game.css";
import listQuestions from "../../data.json";
import shortid from "shortid";
import { priceContext } from "../../context/priceContext";
import { useHistory } from "react-router-dom";

const Game = () => {
  const [curentQuestion, setCurentQuestion] = useState(0);
  const [question, setQuestion] = useState(listQuestions[curentQuestion]);
  const [isMobile, setIsMobile] = useState(false);
  const [isLaptop, setIslaptop] = useState(false);
  const [isMenu, setMenu] = useState(false);
  const [idAnswers, setIdAnswers] = useState([]);
  const [curentAnswer, setCurentAnswer] = useState("");

  
  let history = useHistory();
  
  const { setWinPrice } = useContext(priceContext);

  useEffect(() => {
    const curentWidth = window.outerWidth;
    if (curentWidth < 1440) {
      setIsMobile(true);
    } else {
      setIslaptop(true);
    }
  }, [isMobile, isLaptop]);

  useEffect(() => {
    if (curentAnswer === question.rigth_answer) {
      setIdAnswers((prev) => prev.concat([question.id]));
      console.log(111);
      setWinPrice(question.price);
      setTimeout(() => {
        setCurentQuestion((prev) => prev + 1);
      }, 1000);
    } else if (curentAnswer !== "") {
      history.push("/gameover");
    }
  }, [curentAnswer]);
  useEffect(() => {
    setCurentAnswer("");
    setQuestion(listQuestions[curentQuestion]);
  }, [curentQuestion]);

  const togleMenu = (e) => {
    if (e.target.className === "btn-close" || "menu-btn-open") {
      setMenu(!isMenu);
    }
  };

  // get right answer
  const getRightAnswer = (e) => {
    e.stopPropagation();
    const li = e.target.closest("li");
    setCurentAnswer(li.querySelector("p span").innerHTML);
  };

  return (
    <>
      {!isMenu ? (
        <div className="game-page container">
          {isMobile && (
            <button
              type="button"
              onClick={togleMenu}
              className={isMenu ? "btn-close" : "menu-btn-open"}
            ></button>
          )}
          <div>
            <p className="question">{question.question}</p>
            <ul className="block-answers">
              {question.answers.map((elem) => (
                <li
                  key={shortid()}
                  className="answer border-style-thin"
                  onClick={getRightAnswer}
                >
                  <svg
                    className={
                      curentAnswer === "" || curentAnswer !== elem.variant
                        ? "svg-mob"
                        : curentAnswer === question.rigth_answer
                        ? "correct-answer"
                        : "invalid"
                    }
                    viewBox="0 0 288 56"
                  >
                    <path d="M16.8175 5.31576C18.9762 2.29361 22.4615 0.5 26.1754 0.5H261.825C265.539 0.5 269.024 2.29361 271.183 5.31576L287.386 28L271.183 50.6842C269.024 53.7064 265.539 55.5 261.825 55.5H26.1754C22.4615 55.5 18.9762 53.7064 16.8175 50.6842L0.614452 28L16.8175 5.31576Z" />
                  </svg>
                  <p>
                    <span>{elem.variant}</span> {elem.answer_text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          {isLaptop && <Gain data={idAnswers} />}
        </div>
      ) : (
        <div className="block-menu-game">
          {isMobile && (
            <button
              onClick={togleMenu}
              type="button"
              className="btn-close"
            ></button>
          )}
          <Gain data={idAnswers} />
        </div>
      )}
    </>
  );
};

export default Game;
