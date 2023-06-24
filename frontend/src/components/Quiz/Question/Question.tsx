import React, { FC, ReactNode } from "react";
import "./Question.scss";

interface IQuestion {
  children: ReactNode;
}

const Question: FC<IQuestion> = ({ children }) => {
  return (
    <div className="Question">
      <label>{children}</label>
    </div>
  );
};

export default Question;
