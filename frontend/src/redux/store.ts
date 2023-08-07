import { configureStore } from "@reduxjs/toolkit";
import { quizReducer } from "./slices/quiz";

const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});
export type TRootState = ReturnType<typeof store.getState>;
export type TDispatchState = typeof store.dispatch;
export default store;
