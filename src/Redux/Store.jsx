import { configureStore } from "@reduxjs/toolkit";
import infoReducer from "../Pages/Quiz/FirstWindow/Store/Slice";
import QuesReducer from "../Pages/Quiz/QuizWindow/QuestionsSlice";
import logger from "redux-logger";

export const Store = configureStore({
  reducer: {
    info: infoReducer,
    questions: QuesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(logger),
});
