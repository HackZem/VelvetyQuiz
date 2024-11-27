import { FC } from "react";
import "./Control.scss";
import ProgressBar from "../../../UI/ProgressBar/ProgressBar";

interface IControlProps {
  onNext: () => void;
  isDisabledBtn?: boolean;
  isLast?: boolean;
  questionCount: number;
  currentQuestionNumber: number;
}

const Control: FC<IControlProps> = ({
  onNext,
  isDisabledBtn = false,
  isLast = false,
  questionCount,
  currentQuestionNumber,
}) => {
  return (
    <div className="Quiz-control">
      <ProgressBar
        process={currentQuestionNumber / questionCount}
        sectionCount={questionCount}
      />
      <button
        className={`Quiz-control_btn ${isDisabledBtn ? "disabled" : ""}`}
        onClick={onNext}
      >
        {isLast ? "Finish" : "Next"}
      </button>
    </div>
  );
};

export default Control;
