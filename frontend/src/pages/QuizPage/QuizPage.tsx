import { useEffect, useMemo, useState } from "react";
import "./QuizPage.scss";
import { TRootState } from "../../redux/store";
import Answers from "../../components/Quiz/TypeAnswers/Answers";
import QuizExitBtn from "../../UI/QuizExitBtn/QuizExitBtn";
import Question from "../../components/Quiz/Question/Question";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addAnswer, addTime, nextAnswer } from "../../redux/slices/quiz";
import Control from "../../components/Quiz/Control/Control";
import { useNavigate } from "react-router-dom";

type ISelectedAnswerId = string[];

const QuizPage = () => {
  const { questions, currentQuestionNumber } = useAppSelector(
    (state: TRootState) => state.quiz
  );

  const [selectedAnswersId, setSelectedAnswersId] = useState<ISelectedAnswerId>(
    []
  );

  let [currentTime, setCurrentTime] = useState<number>(0);

  useEffect(() => {
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
      dispatch(nextAnswer());
      updateTime();
    } else {
      navigate("/quiz/result");
      setCurrentTime(0);
    }
  };

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const currentQuestion = useMemo(
    () => questions[currentQuestionNumber],
    [currentQuestionNumber, questions]
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
          data={currentQuestion}
          selectedAnswers={setSelectedAnswersId}
          selectedAnswersId={selectedAnswersId}
        />
        <Control
          onNext={onNext}
          isDisabledBtn={selectedAnswersId.length > 0 ? false : true}
          isLast={currentQuestionNumber === questions.length - 1 ? true : false}
        />
      </div>
    </div>
  );
};

export default QuizPage;
