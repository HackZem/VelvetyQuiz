import { IQuestions } from "../../../../Data/QuizsData";
import _ from "lodash";

export const getCorrectAnswersCount = (
  answers: string[][],
  questions: IQuestions[]
) => {
  return questions.reduce((acc, item, index) => {
    const correctAnswersId = item.answers
      .filter((answer) => answer.isCorrect)
      .map((answer) => answer.id);

    if (_.isEqual(correctAnswersId, _.sortBy(answers[index]))) {
      acc++;
    }

    return acc;
  }, 0);
};
