import "./RadioAnswerResult.scss";
import "../AnswerResult.scss";
import Container from "../../../../../../UI/Container/Container";
import { FC } from "react";
import { IAnswer } from "../../../../../../models/responses/TestResponse";

interface IRadioAnswerResult {
  answers: IAnswer[];
  label: string;
  selectedId: string;
  correctAnswerId: string | undefined;
  time: number;
  numberLabel?: number;
}

const RadioAnswerResult: FC<IRadioAnswerResult> = ({
  label,
  answers,
  selectedId,
  time,
  numberLabel,
  correctAnswerId = undefined,
}) => {
  return (
    <Container className="AnswerResult">
      <div className="AnswerResult-head">
        <h3>
          {numberLabel}. {label}
        </h3>
        <div className="AnswerResult-head-time">
          <span>Time:</span>
          {time}
        </div>
      </div>
      <hr />

      <div className="RadioAnswerResult-items">
        {answers.map((item, index) => {
          let isSelected = item._id === selectedId;
          let isCorrect = item._id === correctAnswerId;

          return (
            <div
              className={`RadioAnswerResult_item ${
                isSelected ? "selected" : ""
              } ${correctAnswerId && (isCorrect ? "correct" : "")} ${
                correctAnswerId && isSelected && !isCorrect ? "wrong" : ""
              }`}
            >
              <div className="RadioAnswerResult_item-number">{index + 1}</div>
              <span className="RadioAnswerResult_item-text">{item.text}</span>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default RadioAnswerResult;
