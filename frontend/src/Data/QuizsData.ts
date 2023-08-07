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
    name: "Тест",
    description:
      "У характеристиці тесту визначено структуру тесту, час, відведений на його виконання, подано типи завдань, уміщених до тесту, наведено схему нарахування тестових балів та зазначено орієнтовний розподіл завдань відповідно до розділів / підрозділів Програми незалежного тестування",
    author: "Анонім",
    date: new Date("2022-03-25"),
    subject: "Тест",
    status: "public",
    completed: 10,
    id: "0",

    questions: [
      {
        text: "Скільки потрибно людині води в день?",
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
        text: "Хто такий програмист",
        scores: 5,
        type: "radio",
        answers: [
          { text: "Бездельник", isCorrect: false, id: "0" },
          { text: "Мазахист", isCorrect: false, id: "1" },
          { text: "Програма", isCorrect: false, id: "2" },
          { text: "Лутчий", isCorrect: true, id: "3" },
        ],
        id: "1",
      },
      {
        text: "Назва лутчого сайту тестів",
        scores: 5,
        type: "radio",
        answers: [
          { text: "наурок", isCorrect: false, id: "0" },
          { text: "всесвітка", isCorrect: false, id: "1" },
          { text: "бархатний quiz", isCorrect: true, id: "2" },
        ],
        id: "2",
      },
    ],
  },
];

export default data;
