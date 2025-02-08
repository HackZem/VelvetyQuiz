import { useEffect, useMemo, useState } from "react";
import "./QuizPage.scss";
import { TRootState } from "../../redux/store";
import Answers from "../../components/Quiz/TypeAnswers/Answers";
import QuizExitBtn from "../../UI/QuizExitBtn/QuizExitBtn";
import Question from "../../components/Quiz/Question/Question";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  addAnswer,
  addTime,
  fetchGetTest,
  nextQuestion,
} from "../../redux/slices/quiz";
import Control from "../../components/Quiz/Control/Control";
import { useNavigate, useParams } from "react-router-dom";

type ISelectedAnswerId = string[];

const QuizPage = () => {
  const { questions, currentQuestionNumber, status } = useAppSelector(
    (state: TRootState) => state.quiz
  );

  const [selectedAnswersId, setSelectedAnswersId] = useState<ISelectedAnswerId>(
    []
  );

  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  let [currentTime, setCurrentTime] = useState<number>(0);

  useEffect(() => {
    dispatch(fetchGetTest(id!));
    updateTime();
    return;
  }, []);

  const updateTime = () => {
    const time = new Date().getTime();
    setCurrentTime(time);
  };

  const onNext = () => {
    dispatch(addAnswer(selectedAnswersId || [""]));
    dispatch(addTime(new Date().getTime() - currentTime));

    setSelectedAnswersId([]);

    if (currentQuestionNumber !== questions.length - 1) {
      dispatch(nextQuestion());
      updateTime();
    } else {
      navigate("/quiz/result");
      setCurrentTime(0);
    }
  };

  const currentQuestion = useMemo(
    () => questions[currentQuestionNumber],
    [currentQuestionNumber, questions]
  );

  return (
    status === "loaded" && (
      <div className="Quiz">
        <div className="Quiz-body">
          <div className="Quiz-header">
            <Question>{currentQuestion.text}</Question>
            <div className="Quiz-header-exit">
              <QuizExitBtn />
            </div>
          </div>

          <Answers
            data={currentQuestion}
            selectedAnswers={setSelectedAnswersId}
            selectedAnswersId={selectedAnswersId}
          />
          <Control
            onNext={onNext}
            isDisabledBtn={selectedAnswersId.length > 0 ? false : true}
            isLast={
              currentQuestionNumber === questions.length - 1 ? true : false
            }
            questionCount={questions.length}
            currentQuestionNumber={currentQuestionNumber}
          />
        </div>
      </div>
    )
  );
};

export default QuizPage;
