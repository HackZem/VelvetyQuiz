import { FC } from "react";
import RadioAnswer from "./RadioAnswer/RadioAnswer";
import "./Answers.scss";
import BoxAnswer from "./BoxAnswer/BoxAnswer";
import _ from "lodash";
import { IQuestion } from "../../../models/responses/TestResponse";

interface IAnswersProps {
  data: IQuestion;
  selectedAnswers: (id: string[] | ((prev: string[]) => string[])) => void;
  selectedAnswersId: string[];
}

const Answers: FC<IAnswersProps> = ({
  data,
  selectedAnswers,
  selectedAnswersId,
}) => {
  return (
    <ul className="Answers">
      {data.questionType === "radio"
        ? data.answers.map((state) => {
            return (
              <RadioAnswer
                key={state._id}
                id={state._id}
                selectedRadioAnswers={selectedAnswers}
                className={
                  selectedAnswersId.includes(state._id) ? "selected" : ""
                }
              >
                {state.text}
              </RadioAnswer>
            );
          })
        : data.answers.map((state) => {
            return (
              <BoxAnswer
                key={state._id}
                id={state._id}
                selectedBoxAnswers={selectedAnswers}
                selectedAnswersId={selectedAnswersId}
                className={
                  selectedAnswersId.includes(state._id) ? "selected" : ""
                }
              >
                {state.text}
              </BoxAnswer>
            );
          })}
    </ul>
  );
};

export default Answers;
