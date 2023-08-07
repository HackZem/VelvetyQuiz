import "./RadioAnswerResult.scss";
import "../AnswerResult.scss";
import Container from "../../../../../../UI/Container/Container";
import { FC } from "react";

interface IRadioAnswerResult {
  dataAnswers: string[];
  label: string;
  selectedId: string;
  correctAnswer: string | undefined;
  time?: Date;
  numberLabel?: number;
}

const RadioAnswerResult: FC<IRadioAnswerResult> = ({
  label,
  dataAnswers,
  selectedId,
  time = new Date(),
  numberLabel,
  correctAnswer = undefined,
}) => {
  return (
    <Container className="AnswerResult">
      <div className="AnswerResult-head">
        <h3>
          {numberLabel}. {label}
        </h3>
        <div className="AnswerResult-head-time">
          <span>Time:</span>
          {time.getMilliseconds()}
        </div>
      </div>
      <hr />

      <div className="RadioAnswerResult-items">
        {dataAnswers.map((item, index) => {
          return (
            <div
              className={`RadioAnswerResult_item ${
                index === +selectedId ? "selected" : ""
              } ${
                correctAnswer && (index === +correctAnswer ? "correct" : "")
              } ${
                correctAnswer &&
                index === +selectedId &&
                index !== +correctAnswer
                  ? "wrong"
                  : ""
              }`}
            >
              <div className="RadioAnswerResult_item-number">{index + 1}</div>
              <span className="RadioAnswerResult_item-text">{item}</span>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default RadioAnswerResult;
