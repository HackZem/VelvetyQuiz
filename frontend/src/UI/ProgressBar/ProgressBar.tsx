import classNames from "classnames";
import "./ProgressBar.scss";
import { FC } from "react";

interface IProgressBarProps {
  className: string;
  process: Number;
  divisionCount: Number;
}

const ProgressBar: FC<IProgressBarProps> = ({
  className,
  process,
  divisionCount,
}) => {
  return <div className={classNames("ProgressBar", className)}></div>;
};

export default ProgressBar;
