import { FC, ReactNode } from "react";
import "./RadioAnswer.scss";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";

interface IRadioAnswerProps {
  children?: ReactNode;
  id: string;
  selectedRadioAnswers: (id: string[]) => void;
  className?: string;
}

const RadioAnswer: FC<IRadioAnswerProps> = ({
  children,
  id,
  selectedRadioAnswers,
  className,
}) => {
  return (
    <div
      className={`RadioAnswer ${className}`}
      onClick={() => {
        console.log(id);
        selectedRadioAnswers([id]);
      }}
    >
      <label>{children || "RadioAnswer"}</label>
      {className === "selected" ? (
        <IoMdRadioButtonOn className="RadioAnswer-radioIcon" />
      ) : (
        <IoMdRadioButtonOff className="RadioAnswer-radioIcon" />
      )}
    </div>
  );
};

export default RadioAnswer;
