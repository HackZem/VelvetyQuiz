import { FC } from "react";
import { TDataAnswers } from "../../../Data/QuizsData";
import RadioAnswer from "./RadioAnswer/RadioAnswer";
import "./Answers.scss";

interface IAnswersProps {
  data: TDataAnswers;
  selectedAnswerHandler: (id: string) => void;
  selectedAnswerId: null | string[];
}

const Answers: FC<IAnswersProps> = ({
  data,
  selectedAnswerHandler,
  selectedAnswerId,
}) => {
  return (
    <ul className="Answers">
      {data.map((state) => {
        return (
          <RadioAnswer
            key={state.id}
            id={state.id}
            selectedRadioAnswer={selectedAnswerHandler}
            className={
              selectedAnswerId?.find((itemFind) => itemFind === state.id)
                ? "selected"
                : ""
            }
          >
            {state.text}
          </RadioAnswer>
        );
      })}
    </ul>
  );
};

export default Answers;
