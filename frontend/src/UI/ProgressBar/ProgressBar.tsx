import classNames from "classnames";
import "./ProgressBar.scss";
import { FC } from "react";
import _ from "lodash";

interface IProgressBarProps {
  className?: string;
  process: number;
  sectionCount: number;
}

const ProgressBar: FC<IProgressBarProps> = ({
  className,
  process,
  sectionCount,
}) => {
  return (
    <div className={classNames("ProgressBar", className)}>
      <ul className="ProgressBar-sections">
        {_.times(sectionCount, (index) => (
          <hr
            className="ProgressBar-section"
            style={{ left: `${(100 / sectionCount) * (index + 1)}%` }}
          ></hr>
        ))}
      </ul>
      <div
        className="ProgressBar-process"
        style={{ width: `${process * 100}%` }}
      />
    </div>
  );
};

export default ProgressBar;
