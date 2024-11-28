import { FC } from "react";
import "./Control.scss";
import ProgressBar from "../../../UI/ProgressBar/ProgressBar";
import Button from "../../../UI/Button/Button";

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
      <Button
        className={`Quiz-control_btn ${isDisabledBtn ? "disabled" : ""}`}
        onClick={onNext}
      >
        {isLast ? "Finish" : "Next"}
      </Button>
    </div>
  );
};

export default Control;
