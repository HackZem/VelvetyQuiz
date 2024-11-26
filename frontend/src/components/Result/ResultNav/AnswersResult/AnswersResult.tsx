import { useAppSelector } from "../../../../hooks";
import { TRootState } from "../../../../redux/store";
import RadioAnswerResult from "./AnswerResultTypes/RadioAnswerResult/RadioAnswerResult";
import BoxAnswerResult from "./AnswerResultTypes/BoxAnswerResult/BoxAnswerResult";
import "./AnswersResult.scss";
import _ from "lodash";

const AnswersResult = () => {
  const { questions, selectedAnswers, questionTimes } = useAppSelector(
    (state: TRootState) => state.quiz
  );

  return (
    <div className="AnswersResult">
      <div className="AnswersResult-filter"></div>
      <div className="AnswersResult-answers">
        {questions.map((item, index) => {
          switch (item.questionType) {
            case "radio":
              return (
                <RadioAnswerResult
                  label={item.text}
                  answers={item.answers}
                  selectedId={selectedAnswers[index][0]}
                  numberLabel={index + 1}
                  time={_.round(questionTimes[index] / 1000, 2)}
                  key={item._id}
                  correctAnswerId={
                    item.answers.find((item) => {
                      return item.isCorrect;
                    })?._id
                  }
                />
              );
            case "box":
              return (
                <BoxAnswerResult
                  label={item.text}
                  answers={item.answers}
                  selectedIds={[...selectedAnswers[index]]}
                  numberLabel={index + 1}
                  time={_.round(questionTimes[index] / 1000, 2)}
                  key={item._id}
                  correctAnswerIds={item.answers
                    .filter((itemFilter) => {
                      return itemFilter.isCorrect;
                    })
                    .map((itemMap) => {
                      return itemMap._id;
                    })}
                />
              );

            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default AnswersResult;
