import UserModel from "../UserModel";
import ITestResponse from "./TestResponse";

export interface ISessionResponse {
  test: ITestResponse;
  user: UserModel;
  currentQuestionNumber: number;
  selectedAnswers: string[][];
  questionTimes: number[];
}
