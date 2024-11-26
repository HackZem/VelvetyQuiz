import UserModel from "../UserModel";

type TStatus = "public" | "privat" | "nocopy";

export interface IAnswer {
  text: string;
  isCorrect: boolean;
  _id: string;
}
[];

type TAnswer = "radio" | "box";

export interface IQuestion {
  text: string;
  scores: number;
  questionType: TAnswer;
  answers: IAnswer[];
  _id: string;
}

export default interface ITestResponse {
  name: string;
  description: string;
  author: UserModel;
  date: Date;
  subject: string;
  status: TStatus;
  completed: number;
  _id: string;

  questions: IQuestion[];
}
