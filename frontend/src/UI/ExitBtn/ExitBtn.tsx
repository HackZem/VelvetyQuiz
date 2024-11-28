import { FC } from "react";
import "./ExitBtn.scss";
import classNames from "classnames";

interface IExitBtn {
  className?: string;
}

const ExitBtn: FC<IExitBtn> = ({ className }) => {
  return (
    <svg
      width="114"
      height="114"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames("ExitBtn", className)}
      xmlnsXlink="http://www.w3.orge/1999/xlink"
      xmlSpace="preserve"
      overflow="hidden"
    >
      <g transform="translate(-17 -695)">
        <path d="M26.5 746.062 60.4625 717.562 60.4625 734.188C112.594 734.662 121.5 787.625 121.5 787.625 121.5 787.625 102.144 759.481 60.4625 759.125L60.4625 774.562 26.5 746.062Z" />
      </g>
    </svg>
  );
};

export default ExitBtn;
