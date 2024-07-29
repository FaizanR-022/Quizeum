import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const getRandom = (max) => {
  return Math.floor(Math.random() * max);
};

const setOptions = (options, correctOption) => {
  return options.splice(getRandom(options.length), 0, correctOption);
};

const QuestionsSlice = createSlice({
  name: "Questions",
  initialState,
  reducers: {
    setData: (state, action) => {
      action.payload.map((object) => {
        state.push({
          question: object.question,
          options: setOptions(object.incorrect.answers, correct.answer),
          selectAnswer: "",
        });
      });
    },
  },
});

export const { setData } = QuestionsSlice.actions;
export default QuestionsSlice.reducer;
