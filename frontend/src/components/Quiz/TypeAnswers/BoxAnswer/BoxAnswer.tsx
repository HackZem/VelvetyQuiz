import { FC, ReactNode } from "react";
import "./BoxAnswer.scss";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import _ from "lodash";

interface IBoxAnswerProps {
  children?: ReactNode;
  id: string;
  selectedBoxAnswers: (id: string[] | ((prev: string[]) => string[])) => void;
  selectedAnswersId: string[];
  className?: string;
}

const BoxAnswer: FC<IBoxAnswerProps> = ({
  children,
  id,
  selectedBoxAnswers,
  className,
  selectedAnswersId,
}) => {
  return (
    <div
      className={`BoxAnswer ${className}`}
      onClick={() =>
        selectedBoxAnswers((prev) => {
          if (prev.includes(id)) {
            return prev.filter((item) => item !== id);
          } else {
            return [...prev, id];
          }
        })
      }
    >
      <label>{children || "BoxAnswer"}</label>
      {className === "selected" ? (
        <ImCheckboxChecked className="BoxAnswer-boxIcon" />
      ) : (
        <ImCheckboxUnchecked className="BoxAnswer-boxIcon" />
      )}
    </div>
  );
};

export default BoxAnswer;
