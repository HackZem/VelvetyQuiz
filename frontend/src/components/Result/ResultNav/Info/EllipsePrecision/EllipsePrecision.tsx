import { FC, useMemo, useState } from "react";
import "./EllipsePrecision.scss";
import percentToValueCircle from "../../../../../helpers/percentToValueCircle";

interface IEllipsePrecision {
  score: number;
  maxScore: number;
}

const EllipsePrecision: FC<IEllipsePrecision> = ({ score, maxScore }) => {
  const percent = useMemo(() => {
    return (score / maxScore) * 100;
  }, [score, maxScore]);

  const lenghtCircle = useMemo(() => {
    return 2 * Math.PI * 8.25;
  }, []);
  const maxOffset = useMemo(() => {
    return lenghtCircle * 0.2;
  }, [lenghtCircle]);

  return (
    <svg className="EllipsePrecision" height={"18rem"}>
      <circle
        className="EllipsePrecision-circle"
        fill="transparent"
        cx={"50%"}
        cy={"50%"}
        r={"8.25rem"}
        stroke="#BBC5E7"
        strokeWidth={"1.5rem"}
        strokeDasharray={`${lenghtCircle}rem ${lenghtCircle}rem`}
        strokeDashoffset={maxOffset + "rem"}
      />

      <circle
        className="EllipsePrecision-circleProgressBar"
        fill="transparent"
        cx={"50%"}
        cy={"50%"}
        r={"8.25rem"}
        stroke="#424F97"
        strokeWidth={"1.5rem"}
        strokeDasharray={`${lenghtCircle}rem ${lenghtCircle}rem`}
        strokeDashoffset={lenghtCircle * percentToValueCircle(percent) + "rem"}
      />
      <circle
        className="EllipsePrecision-circleProgressBar"
        fill="transparent"
        cx={"50%"}
        cy={"50%"}
        r={"8.25rem"}
        stroke="#fff"
        strokeWidth={"1.5rem"}
        strokeDasharray={`1 ${lenghtCircle}rem`}
        strokeDashoffset={lenghtCircle * percentToValueCircle(percent) + "rem"}
      />
      <text
        className="EllipsePrecision-circle-percent"
        fontSize={"4rem"}
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
      >
        {Math.round(percent)}%
      </text>
      <text
        className="EllipsePrecision-circle-precision"
        fontSize={"1.5rem"}
        x="50%"
        y="90%"
        textAnchor="middle"
        dy=".3em"
      >
        Precision
      </text>
    </svg>
  );
};

export default EllipsePrecision;
