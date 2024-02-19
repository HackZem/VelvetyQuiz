import "./Info.scss";
import EllipsePrecision from "./EllipsePrecision/EllipsePrecision";
import Container from "../../../../UI/Container/Container";
import { useAppSelector } from "../../../../hooks";
import { TRootState } from "../../../../redux/store";
import { getCorrectAnswersCount } from "./helpers";
import { FC, useMemo } from "react";
import { getMaxScores, getScores } from "../../../../pages/ResultPage/helpers";
import _ from "lodash";

interface IInfo {
  points: number;
}

const Info: FC<IInfo> = ({ points }) => {
  const { selectedAnswers, questionTimes } = useAppSelector(
    (state: TRootState) => state.quiz
  );

  const questions = useAppSelector((state: TRootState) => state.quiz.questions);

  const correctAnswersCount = useMemo(
    () => getCorrectAnswersCount(selectedAnswers, questions),
    [selectedAnswers, questions]
  );

  return (
    <div className="Result-info">
      <EllipsePrecision
        score={getScores(selectedAnswers, questions)}
        maxScore={getMaxScores(questions)}
      />
      <div className="Result-info-body">
        <div className="Result-info-body_item">
          <span>Total time</span>
          <Container>{_.round(_.sum(questionTimes) / 1000, 2)}s</Container>
        </div>
        <div className="Result-info-body_item">
          <span>Average time / question</span>
          <Container>{_.round(_.mean(questionTimes) / 1000, 2)}s</Container>
        </div>
        <div className="Result-info-body_item">
          <span>Exact score</span>
          <Container>{_.round(points, 2)}</Container>
        </div>
        <div className="Result-info-body_item">
          <span>Correct</span>
          <Container>{correctAnswersCount}</Container>
        </div>
        <div className="Result-info-body_item">
          <span>Wrong</span>
          <Container>{selectedAnswers.length - correctAnswersCount}</Container>
        </div>
        <div className="Result-info-body_item">
          <span>Misses</span>
          <Container>{questions.length - selectedAnswers.length}</Container>
        </div>
      </div>
    </div>
  );
};

export default Info;
