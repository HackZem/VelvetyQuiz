import React from "react";
import "./Quiz.scss";
import Question from "./Question/Question";
import Answers from "./Answers/Answers";
import QuizExitBtn from "../UI/QuizExitBtn/QuizExitBtn";

const Quiz = () => {
  return (
    <div className="Quiz">
      <div className="Quiz-body">
        <div className="Quiz-header">
          <Question>{"Скільки води потрібно людині вдень?"}</Question>
          <div className="Quiz-header-exit">
            <QuizExitBtn />
          </div>
        </div>

        <Answers />
        <div className="Quiz-control">
          <div className="Quiz-control_bar" />
          <button className="Quiz-control_btn">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
