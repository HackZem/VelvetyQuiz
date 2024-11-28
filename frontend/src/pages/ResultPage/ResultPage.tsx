import { useMemo, useState } from "react";
import Button from "../../UI/Button/Button";
import Container from "../../UI/Container/Container";
import AnswersResult from "../../components/Result/ResultNav/AnswersResult/AnswersResult";
import Info from "../../components/Result/ResultNav/Info/Info";
import "./ResultPage.scss";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { TRootState } from "../../redux/store";
import { getMaxScores, getScores } from "./helpers";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import { reset } from "../../redux/slices/quiz";

const ResultPage = () => {
  const [actionSelected, setActionSelected] = useState(0);

  const navigate = useNavigate();

  const selectedAnswers = useAppSelector(
    (state: TRootState) => state.quiz.selectedAnswers
  );

  const questions = useAppSelector((state: TRootState) => state.quiz.questions);

  const dispatch = useAppDispatch();

  const points = useMemo(
    () =>
      _.max([
        (getScores(selectedAnswers, questions) / getMaxScores(questions)) * 12,
        1,
      ]) as number,
    [selectedAnswers, questions]
  );

  return (
    <div className="Result">
      <div className="Result-head">
        <h1>Тест</h1>
        <div className="Result-head-info">
          <div className="Result-head-info_questionsNumber">
            <Container>
              <div className="Result-head-info_questionsNumber-text">
                <span>{questions.length}</span>questions
              </div>
            </Container>
          </div>
          <div className="Result-head-info_rating">
            <span>Rating</span>
            <Container>
              <div className="Result-head-info_rating-text">
                <span>
                  {_.round(points)}
                  /12
                </span>
                points
              </div>
            </Container>
          </div>
        </div>
      </div>
      <div className="Result-transition">
        <div className="Result-transition-actions">
          <Button
            className="Result-transition-actions-try"
            onClick={() => {
              navigate("/quiz");
              dispatch(reset());
            }}
          >
            Try Again
          </Button>
          <nav>
            <Button
              className={`Result-transition-actions_answers ${
                actionSelected ? "" : "selected"
              }`}
              onClick={() => {
                setActionSelected(0);
              }}
            >
              Answers
            </Button>
            <Button
              className={`Result-transition-actions_info  ${
                actionSelected ? "selected" : ""
              }`}
              onClick={() => {
                setActionSelected(1);
              }}
            >
              Info
            </Button>
          </nav>
        </div>
        <hr />
      </div>
      {actionSelected ? <Info points={points} /> : <AnswersResult />}
    </div>
  );
};

export default ResultPage;
