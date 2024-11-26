import "./BoxAnswerResult.scss";
import "../AnswerResult.scss";
import Container from "../../../../../../UI/Container/Container";
import { FC } from "react";
import equalArrays from "../../../../../../helpers/equalArrays";
import { IAnswer } from "../../../../../../models/responses/TestResponse";
import _ from "lodash";

interface IBoxAnswerResult {
  answers: IAnswer[];
  label: string;
  selectedIds: string[];
  time: number;
  numberLabel?: number;
  correctAnswerIds?: string[];
}

const BoxAnswerResult: FC<IBoxAnswerResult> = ({
  label,
  answers,
  selectedIds,
  time,
  numberLabel,
  correctAnswerIds = undefined,
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
        {answers.map((item, index) => {
          return (
            <div
              className={`BoxAnswerResult_item ${
                selectedIds.includes(item._id) ? "selected" : ""
              } ${
                correctAnswerIds && correctAnswerIds?.includes(item._id)
                  ? "correct"
                  : !_.isEqual(correctAnswerIds as string[], selectedIds) &&
                    "wrong"
              }`}
            >
              <div className="BoxAnswerResult_item-number">{index + 1}</div>
              <span className="BoxAnswerResult_item-text">{item.text}</span>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default BoxAnswerResult;
