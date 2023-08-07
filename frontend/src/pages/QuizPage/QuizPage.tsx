import { useMemo, useState } from "react";
import "./QuizPage.scss";
import { TRootState } from "../../redux/store";
import Answers from "../../components/Quiz/TypeAnswers/Answers";
import QuizExitBtn from "../../UI/QuizExitBtn/QuizExitBtn";
import Question from "../../components/Quiz/Question/Question";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addAnswer, nextAnswer } from "../../redux/slices/quiz";
import Control from "../../components/Quiz/Control/Control";
import { useNavigate } from "react-router-dom";

type ISelectedAnswerId = string[] | null;

const QuizPage = () => {
  const { questions, currentQuestionNumber } = useAppSelector(
    (state: TRootState) => state.quiz
  );
  const [selectedAnswerId, setSelectedAnswerId] =
    useState<ISelectedAnswerId>(null);

  const selectedAnswerHandler = (id: string) => {
    setSelectedAnswerId([id]);
  };

  const onNext = () => {
    dispatch(addAnswer(selectedAnswerId || [""]));
    setSelectedAnswerId(null);
    currentQuestionNumber !== questions.length - 1
      ? dispatch(nextAnswer())
      : navigate("/quiz/result");
  };

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const currentQuestion = useMemo(
    () => questions[currentQuestionNumber],
    [currentQuestionNumber]
  );

  return (
    <div className="Quiz">
      <div className="Quiz-body">
        <div className="Quiz-header">
          <Question>{currentQuestion.text}</Question>
          <div className="Quiz-header-exit">
            <QuizExitBtn />
          </div>
        </div>

        <Answers
          data={currentQuestion.answers}
          selectedAnswerHandler={selectedAnswerHandler}
          selectedAnswerId={selectedAnswerId}
        />
        <Control
          onNext={onNext}
          isDisabledBtn={selectedAnswerId ? false : true}
          isLast={currentQuestionNumber === questions.length - 1 ? true : false}
        />
      </div>
    </div>
  );
};

export default QuizPage;
