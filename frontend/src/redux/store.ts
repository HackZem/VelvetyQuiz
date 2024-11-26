import { configureStore } from "@reduxjs/toolkit";
import { quizReducer } from "./slices/quiz";
import { modalsReducer } from "./slices/modals";
import { authReducer } from "./slices/auth";

const store = configureStore({
  reducer: {
    quiz: quizReducer,
    modals: modalsReducer,
    auth: authReducer,
  },
});
export type TRootState = ReturnType<typeof store.getState>;
export type TDispatchState = typeof store.dispatch;
export default store;
