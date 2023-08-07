import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import data, { IQuestions } from "../../Data/QuizsData";

interface IQuizStateSlice {
  currentQuestionNumber: number;
  status: string;
  questions: IQuestions[];
  selectedAnswers: string[][];
}

const initialState: IQuizStateSlice = {
  currentQuestionNumber: 0,
  status: "loading",
  questions: [...data[0].questions],

  selectedAnswers: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    addAnswer: (state, action: PayloadAction<string[]>) => {
      return {
        ...state,
        selectedAnswers: [...state.selectedAnswers, action.payload],
      };
    },
    nextAnswer: (state) => {
      return {
        ...state,
        currentQuestionNumber: state.currentQuestionNumber + 1,
      };
    },
  },
});

export const { addAnswer, nextAnswer } = quizSlice.actions;
export const quizReducer = quizSlice.reducer;
