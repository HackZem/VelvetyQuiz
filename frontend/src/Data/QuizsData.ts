type TStatus = "public" | "privat" | "nocopy";

export type TDataAnswer = {
  text: string;
  isCorrect: boolean;
  id: string;
};

type TTypeAnswer = "radio" | "box";

interface IQuestion {
  text: string;
  scores: number;
  questionType: TTypeAnswer;
  answers: TDataAnswer[];
  id: string;
}

interface ITestData {
  name: string;
  description: string;
  author: string;
  date: Date;
  subject: string;
  status: TStatus;
  completed: number;
  id: string;

  questions: IQuestion[];
}

const data: ITestData[] = [
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
        questionType: "radio",
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
        questionType: "radio",
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
        questionType: "box",
        answers: [
          { text: "naurok", isCorrect: false, id: "0" },
          { text: "vsesvita", isCorrect: true, id: "1" },
          { text: "quiz", isCorrect: true, id: "2" },
        ],
        id: "2",
      },
    ],
  },
  {
    name: "Test",
    description:
      "The test characteristics define the structure of the test, the time allotted for its execution, the types of tasks included in the test, the scheme for calculating test points and the approximate distribution of tasks according to the sections / subsections of the Independent Testing Program are given.",
    author: "HackZem",
    date: new Date("2024-01-05"),
    subject: "Just",
    status: "public",
    completed: 0,
    id: "1",

    questions: [
      {
        text: "Назвіть дві відомі праці Вільяма Шекспіра.",
        scores: 7,
        questionType: "box",
        answers: [
          { text: "Ромео і Джульєтта", isCorrect: true, id: "0" },
          { text: "Гордість і упередження", isCorrect: false, id: "2" },
          { text: "Гамлет", isCorrect: true, id: "1" },
          { text: "Убити перепелятника", isCorrect: false, id: "3" },
        ],
        id: "0",
      },
      {
        text: "Хто такий програміст?",
        scores: 5,
        questionType: "radio",
        answers: [
          { text: "Особа, яка готує їжу", isCorrect: false, id: "0" },
          { text: "Особа, яка пише романи", isCorrect: false, id: "1" },
          { text: "Особа, яка малює", isCorrect: false, id: "2" },
          { text: "Особа, яка пише код", isCorrect: true, id: "3" },
        ],
        id: "1",
      },
      {
        text: "Назвіть два гази, які становлять більшість атмосфери Землі.",
        scores: 8,
        questionType: "box",
        answers: [
          { text: "Азот", isCorrect: true, id: "0" },
          { text: "Кисень", isCorrect: true, id: "1" },
          { text: "Діоксид вуглецю", isCorrect: false, id: "2" },
          { text: "Аргон", isCorrect: false, id: "3" },
        ],
        id: "2",
      },
      {
        text: "Яка столиця Англії?",
        scores: 5,
        questionType: "radio",
        answers: [
          { text: "Париж", isCorrect: false, id: "0" },
          { text: "Лондон", isCorrect: true, id: "1" },
          { text: "Берлін", isCorrect: false, id: "2" },
          { text: "Мадрид", isCorrect: false, id: "3" },
        ],
        id: "3",
      },
      {
        text: "Яка найбільша планета у нашій сонячній системі?",
        scores: 5,
        questionType: "radio",
        answers: [
          { text: "Земля", isCorrect: false, id: "0" },
          { text: "Марс", isCorrect: false, id: "1" },
          { text: "Юпітер", isCorrect: true, id: "2" },
          { text: "Венера", isCorrect: false, id: "3" },
        ],
        id: "4",
      },
      {
        text: "Який корінь квадратний з 81?",
        scores: 5,
        questionType: "radio",
        answers: [
          { text: "7", isCorrect: false, id: "0" },
          { text: "8", isCorrect: false, id: "1" },
          { text: "9", isCorrect: true, id: "2" },
          { text: "10", isCorrect: false, id: "3" },
        ],
        id: "5",
      },
      {
        text: "Який хімічний символ для золота?",
        scores: 5,
        questionType: "radio",
        answers: [
          { text: "Gd", isCorrect: false, id: "0" },
          { text: "Au", isCorrect: true, id: "1" },
          { text: "Ag", isCorrect: false, id: "2" },
          { text: "Ga", isCorrect: false, id: "3" },
        ],
        id: "6",
      },
      {
        text: "Хто написав 'Ромео і Джульєтту'?",
        scores: 5,
        questionType: "radio",
        answers: [
          { text: "Чарльз Діккенс", isCorrect: false, id: "0" },
          { text: "Вільям Шекспір", isCorrect: true, id: "1" },
          { text: "Марк Твен", isCorrect: false, id: "2" },
          { text: "Джейн Остін", isCorrect: false, id: "3" },
        ],
        id: "7",
      },
      {
        text: "Яка валюта в Японії?",
        scores: 5,
        questionType: "radio",
        answers: [
          { text: "Долар", isCorrect: false, id: "0" },
          { text: "Євро", isCorrect: false, id: "1" },
          { text: "Єна", isCorrect: true, id: "2" },
          { text: "Фунт", isCorrect: false, id: "3" },
        ],
        id: "8",
      },
      {
        text: "Яка найвища гора в світі?",
        scores: 5,
        questionType: "radio",
        answers: [
          { text: "К2", isCorrect: false, id: "0" },
          { text: "Еверест", isCorrect: true, id: "1" },
          { text: "Кіліманджаро", isCorrect: false, id: "2" },
          { text: "Фудзі", isCorrect: false, id: "3" },
        ],
        id: "9",
      },
      {
        text: "Яка найдовша річка в світі?",
        scores: 5,
        questionType: "radio",
        answers: [
          { text: "Амазонка", isCorrect: false, id: "0" },
          { text: "Ніл", isCorrect: true, id: "1" },
          { text: "Янцзи", isCorrect: false, id: "2" },
          { text: "Міссісіпі", isCorrect: false, id: "3" },
        ],
        id: "10",
      },
      {
        text: "Хто відкрив закон тяжіння?",
        scores: 5,
        questionType: "radio",
        answers: [
          { text: "Альберт Ейнштейн", isCorrect: false, id: "0" },
          { text: "Ісаак Ньютон", isCorrect: true, id: "1" },
          { text: "Галілео Галілей", isCorrect: false, id: "2" },
          { text: "Нікола Тесла", isCorrect: false, id: "3" },
        ],
        id: "11",
      },
    ],
  },
];

export default data;
