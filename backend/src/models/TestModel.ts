import mongoose, { ObjectId } from "mongoose";

type TStatus = "public" | "privat" | "nocopy";

interface IAnswer {
  text: string;
  isCorrect: boolean;
  id: string;
}
[];

type TAnswer = "radio" | "box";

interface IQuestion {
  text: string;
  scores: number;
  questionType: TAnswer;
  answers: IAnswer;
  id: string;
}

export interface ITest {
  name: string;
  description: string;
  author: ObjectId;
  date: Date;
  subject: string;
  status: TStatus;
  completed: number;

  questions: IQuestion[];
}

const TestSchema = new mongoose.Schema<ITest>(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    completed: {
      type: Number,
      default: 0,
    },
    questions: {
      type: [
        {
          text: {
            type: String,
            required: true,
          },
          scores: {
            type: Number,
            required: true,
          },
          questionType: {
            type: String,
            required: true,
          },
          answers: {
            type: [
              {
                text: {
                  type: String,
                  required: true,
                },
                isCorrect: {
                  type: Boolean,
                  required: true,
                },
              },
            ],
            required: true,
          },
        },
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Test", TestSchema);
