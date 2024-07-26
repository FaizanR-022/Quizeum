import { configureStore } from "@reduxjs/toolkit";
import infoReducer from "../Pages/Quiz/FirstWindow/Slice";

export const Store = configureStore({
  reducer: {
    info: infoReducer,
  },
});
