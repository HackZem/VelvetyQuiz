import { FC } from "react";
import "./Control.scss";

interface IControlProps {
  onNext: () => void;
  isDisabledBtn?: boolean;
  isLast?: boolean;
}

const Control: FC<IControlProps> = ({
  onNext,
  isDisabledBtn = false,
  isLast = false,
}) => {
  return (
    <div className="Quiz-control">
      <div className="Quiz-control_bar" />
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
