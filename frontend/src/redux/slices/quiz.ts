import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import TestService from "../../services/TestService";
import ITestResponse, { IQuestion } from "../../models/responses/TestResponse";

type TStatus = "loading" | "loaded" | "error";

interface ITestStateSlice {
  currentQuestionNumber: number;
  status: TStatus;
  questions: IQuestion[];
  selectedAnswers: string[][];
  questionTimes: number[];
}

const initialState: ITestStateSlice = {
  currentQuestionNumber: 0,
  status: "loading",
  questions: [],
  selectedAnswers: [],
  questionTimes: [],
};

export const fetchGetTest = createAsyncThunk<ITestResponse, string>(
  "tests/fetchGetTest",
  async (id: string) => {
    const { data } = await TestService.getTest(id);

    return data;
  }
);

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    addAnswer: (state, action: PayloadAction<string[]>) => {
      state.selectedAnswers[state.currentQuestionNumber] = action.payload;

      return state;
    },
    nextQuestion: (state) => {
      state.currentQuestionNumber++;

      return state;
    },
    addTime: (state, action: PayloadAction<number>) => {
      state.questionTimes[state.currentQuestionNumber] = action.payload;

      return state;
    },
    reset: (state) => {
      state.currentQuestionNumber = 0;
      state.questionTimes = [];
      state.selectedAnswers = [];

      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetTest.pending, (state) => {
        state.status = "loading";
        state.questions = [];
        state.selectedAnswers = [];
        state.currentQuestionNumber = 0;
        state.questionTimes = [];
      })
      .addCase(
        fetchGetTest.fulfilled,
        (state, action: PayloadAction<ITestResponse>) => {
          state.status = "loaded";
          state.questions = action.payload.questions as any;
          state.selectedAnswers = [];
          state.currentQuestionNumber = 0;
          state.questionTimes = [];
        }
      )
      .addCase(fetchGetTest.rejected, (state) => {
        state.status = "error";
        state.questions = [];
        state.selectedAnswers = [];
        state.currentQuestionNumber = 0;
        state.questionTimes = [];
      });
  },
});

export const { addAnswer, nextQuestion, reset, addTime } = quizSlice.actions;
export const quizReducer = quizSlice.reducer;
