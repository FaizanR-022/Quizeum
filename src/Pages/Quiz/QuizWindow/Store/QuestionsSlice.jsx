import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const getRandom = (max) => {
  return Math.floor(Math.random() * max);
};

const setOptions = (options, correctOption) => {
  options.splice(getRandom(options.length), 0, correctOption);
  return options;
};

const QuestionsSlice = createSlice({
  name: "Questions",
  initialState,
  reducers: {
    setData: (state, action) => {
      if (!action.payload.results) {
        return;
      }

      state.push({
        name: action.payload.name,
        content: action.payload.results.map((object) => ({
          question: object.question,
          options: setOptions(object.incorrect_answers, object.correct_answer),
          correctOption: object.correct_answer,
          selectAnswer: "",
        })),
      });
      console.log(state);
    },

    clearData: (state, action) => (state = []),
  },
});

export const { setData, clearData } = QuestionsSlice.actions;
export default QuestionsSlice.reducer;
