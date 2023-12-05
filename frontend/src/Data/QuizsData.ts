type TStatus = "public" | "privat" | "nocopy";
export type TDataAnswers = {
  text: string;
  isCorrect: boolean;
  id: string;
}[];

type TTypeAnswer = "radio" | "box";

export interface IQuestions {
  text: string;
  scores: number;
  type: TTypeAnswer;
  answers: TDataAnswers;
  id: string;
}

interface IQuizData {
  name: string;
  description: string;
  author: string;
  date: Date;
  subject: string;
  status: TStatus;
  completed: number;
  id: string;

  questions: IQuestions[];
}

const data: IQuizData[] = [
  {
    name: "Test",
    description:
      "The test characteristics define the structure of the test, the time allotted for its execution, the types of tasks included in the test, the scheme for calculating test points and the approximate distribution of tasks according to the sections / subsections of the Independent Testing Program are given.",
    author: "Anonim",
    date: new Date("2022-03-25"),
    subject: "Test",
    status: "public",
    completed: 10,
    id: "0",

    questions: [
      {
        text: "How much water does a person need per day?",
        scores: 5,
        type: "radio",
        answers: [
          { text: "10л", isCorrect: false, id: "0" },
          { text: "2л", isCorrect: true, id: "1" },
          { text: "1л", isCorrect: false, id: "2" },
          { text: "0.5л", isCorrect: false, id: "3" },
        ],
        id: "0",
      },
      {
        text: "Who is a programmer?",
        scores: 5,
        type: "radio",
        answers: [
          { text: "1", isCorrect: false, id: "0" },
          { text: "2", isCorrect: false, id: "1" },
          { text: "3", isCorrect: false, id: "2" },
          { text: "4", isCorrect: true, id: "3" },
        ],
        id: "1",
      },
      {
        text: "The name of the test website",
        scores: 5,
        type: "radio",
        answers: [
          { text: "naurok", isCorrect: false, id: "0" },
          { text: "vsesvita", isCorrect: false, id: "1" },
          { text: "quiz", isCorrect: true, id: "2" },
        ],
        id: "2",
      },
    ],
  },
];

export default data;
