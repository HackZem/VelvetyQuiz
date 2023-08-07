import React from "react";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import "./QuizStartPage.scss";

const QuizStartPage = () => {
  return (
    <div className="QuizStart">
      <label>Start testing</label>
      <Input className="QuizStart-input">Username...</Input>
      <Button className="QuizStart-button">Start</Button>
    </div>
  );
};

export default QuizStartPage;
