import { useAppSelector } from "../../../../hooks";
import { TRootState } from "../../../../redux/store";
import RadioAnswerResult from "./AnswerResultTypes/RadioAnswerResult/RadioAnswerResult";
import BoxAnswerResult from "./AnswerResultTypes/BoxAnswerResult/BoxAnswerResult";
import "./AnswersResult.scss";

const AnswersResult = () => {
  const { questions, selectedAnswers } = useAppSelector(
    (state: TRootState) => state.quiz
  );

  return (
    <div className="AnswersResult">
      <div className="AnswersResult-filter"></div>
      <div className="AnswersResult-answers">
        {questions.map((item, index) => {
          {
            switch (item.type) {
              case "radio":
                return (
                  <RadioAnswerResult
                    label={item.text}
                    dataAnswers={item.answers.map((item) => {
                      return item.text;
                    })}
                    selectedId={selectedAnswers[index][0]}
                    numberLabel={index + 1}
                    key={item.id}
                    correctAnswer={
                      item.answers.find((item) => {
                        return item.isCorrect;
                      })?.id
                    }
                    // correctAnswer={undefined}
                  />
                );
              case "box":
                return (
                  <BoxAnswerResult
                    label={item.text}
                    dataAnswers={item.answers.map((item) => {
                      return item.text;
                    })}
                    selectedIds={[...selectedAnswers[index]]}
                    numberLabel={index + 1}
                    key={item.id}
                    correctAnswers={item.answers
                      .filter((itemFilter) => {
                        return itemFilter.isCorrect;
                      })
                      .map((itemMap) => {
                        return itemMap.id;
                      })}
                  />
                );

              default:
                break;
            }
          }
        })}
      </div>
    </div>
  );
};

export default AnswersResult;