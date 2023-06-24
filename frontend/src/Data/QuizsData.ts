type TStatus = "public" | "privat" | "nocopy";

interface IQuizData {
  name: string;
  description: string;
  author: string;
  date: Date;
  subject: string;
  status: TStatus;
  completed: number;

  questions: {
    question: string;
    answers: {
      label: string;
      isCorrect: boolean;
    }[];
  }[];
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

    questions: [
      {
        question: "Скільки потрибно людині води в день?",
        answers: [
          { label: "10л", isCorrect: false },
          { label: "2л", isCorrect: true },
          { label: "1л", isCorrect: false },
          { label: "0.5л", isCorrect: false },
        ],
      },
      {
        question: "Хто такий програмист",
        answers: [
          { label: "Бездельник", isCorrect: false },
          { label: "Мазахист", isCorrect: false },
          { label: "Програма", isCorrect: false },
          { label: "Лутчий", isCorrect: true },
        ],
      },
      {
        question: "Назва лутчого сайту тестів",
        answers: [
          { label: "наурок", isCorrect: false },
          { label: "всесвітка", isCorrect: false },
          { label: "бархатний quiz", isCorrect: true },
          { label: "леший", isCorrect: false },
        ],
      },
    ],
  },
];

export default data;

// git commit -m "updates QuizStart, Quiz(layout), add Data - QuizsData"
