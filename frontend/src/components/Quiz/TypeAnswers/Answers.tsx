import { FC } from "react";
import { IQuestions, TDataAnswers } from "../../../Data/QuizsData";
import RadioAnswer from "./RadioAnswer/RadioAnswer";
import "./Answers.scss";
import BoxAnswer from "./BoxAnswer/BoxAnswer";
import _ from "lodash";

interface IAnswersProps {
  data: IQuestions;
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
                key={state.id}
                id={state.id}
                selectedRadioAnswers={selectedAnswers}
                className={
                  selectedAnswersId.includes(state.id) ? "selected" : ""
                }
              >
                {state.text}
              </RadioAnswer>
            );
          })
        : data.answers.map((state) => {
            return (
              <BoxAnswer
                key={state.id}
                id={state.id}
                selectedBoxAnswers={selectedAnswers}
                selectedAnswersId={selectedAnswersId}
                className={
                  selectedAnswersId.includes(state.id) ? "selected" : ""
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
