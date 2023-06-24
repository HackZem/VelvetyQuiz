import { FC, ReactNode } from "react";
import "./Answer.scss";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";

interface IAnswer {
  children?: ReactNode;
}

const Answer: FC<IAnswer> = ({ children }) => {
  return (
    <div className="Answer">
      <label>{children || "Answer"}</label>
      <IoMdRadioButtonOff className="Answer-radioIcon" />
    </div>
  );
};

export default Answer;
