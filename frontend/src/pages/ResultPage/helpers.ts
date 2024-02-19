import _ from "lodash";
import { IQuestions } from "../../Data/QuizsData";

export const getScores = (answers: string[][], questions: IQuestions[]) => {
  return questions.reduce((acc, item, index) => {
    const correctAnswersId = item.answers
      .filter((answer) => answer.isCorrect)
      .map((answer) => answer.id);

    if (_.isEqual(correctAnswersId, _.sortBy(answers[index]))) {
      acc += item.scores;
    }

    return acc;
  }, 0);
};

export const getMaxScores = (questions: IQuestions[]) => {
  return questions.reduce((acc, item) => {
    return (acc += item.scores);
  }, 0);
};
