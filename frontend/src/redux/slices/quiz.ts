import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import data, { IQuestions } from "../../Data/QuizsData";

interface IQuizStateSlice {
  currentQuestionNumber: number;
  status: string;
  questions: IQuestions[];
  selectedAnswers: string[][];
  questionTimes: number[];
}

const initialState: IQuizStateSlice = {
  currentQuestionNumber: 0,
  status: "loading",
  questions: [...data[1].questions],

  selectedAnswers: [],

  questionTimes: [],
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
    addTime: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        questionTimes: [...state.questionTimes, action.payload],
      };
    },
    reset: (state) => {
      return {
        ...state,
        currentQuestionNumber: 0,
        selectedAnswers: [],
        questionTimes: [],
      };
    },
  },
});

export const { addAnswer, nextAnswer, reset, addTime } = quizSlice.actions;
export const quizReducer = quizSlice.reducer;
