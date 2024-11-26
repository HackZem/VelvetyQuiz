import _ from "lodash";
import { IQuestion } from "../../models/responses/TestResponse";

export const getScores = (answers: string[][], questions: IQuestion[]) => {
  return questions.reduce((acc, item, index) => {
    const correctAnswersId = item.answers
      .filter((answer) => answer.isCorrect)
      .map((answer) => answer._id);

    if (_.isEqual(correctAnswersId, _.sortBy(answers[index]))) {
      acc += item.scores;
    }

    return acc;
  }, 0);
};

export const getMaxScores = (questions: IQuestion[]) => {
  return questions.reduce((acc, item) => {
    return (acc += item.scores);
  }, 0);
};
