import "./BoxAnswerResult.scss";
import "../AnswerResult.scss";
import Container from "../../../../../../UI/Container/Container";
import { FC } from "react";
import equalArrays from "../../../../../../helpers/equalArrays";

interface IBoxAnswerResult {
  dataAnswers: string[];
  label: string;
  selectedIds: string[];
  time: number;
  numberLabel?: number;
  correctAnswers?: string[];
}

const BoxAnswerResult: FC<IBoxAnswerResult> = ({
  label,
  dataAnswers,
  selectedIds,
  time,
  numberLabel,
  correctAnswers = undefined,
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

      <div className="BoxAnswerResult-items">
        {dataAnswers.map((itemMap, index) => {
          return (
            <div
              className={`BoxAnswerResult_item ${
                selectedIds.includes(index.toString()) ? "selected" : ""
              } ${
                correctAnswers && correctAnswers.includes(index.toString())
                  ? "correct"
                  : !equalArrays(correctAnswers as string[], selectedIds) &&
                    "wrong"
              }`}
            >
              <div className="BoxAnswerResult_item-number">{index + 1}</div>
              <span className="BoxAnswerResult_item-text">{itemMap}</span>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default BoxAnswerResult;
