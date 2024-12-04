import mongoose, { Schema } from "mongoose";

export interface ISession {
  test: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
  currentQuestionNumber: number;
  selectedAnswers: string[][];
  questionTimes: number[];
}

const TestSchema = new mongoose.Schema<ISession>({
  test: { type: mongoose.Schema.Types.ObjectId, ref: "Test", required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  currentQuestionNumber: { type: Number, required: true },
  selectedAnswers: { type: [[String]] },
  questionTimes: { type: [Number] },
});

export default mongoose.model("Session", TestSchema);
