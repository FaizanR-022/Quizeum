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
      if (!action.payload) {
        return;
      }

      // state = action.payload;
      action.payload.map((object) =>
        state.push({
          name: object.name,
          content: object.content.map((data) => ({
            ...data,
            selectAnswer: "",
          })),
        })
      );

      // state.push({
      //   name: action.payload.name,
      //   // content: action.payload.results.map((object) => ({
      //   //   question: object.question,
      //   //   options: setOptions(object.incorrect_answers, object.correct_answer),
      //   //   correctOption: object.correct_answer,
      //   //   selectAnswer: "",
      //   // })),
      //   content: { ...action.payload.content, selectAnswer: "" },
      // });
    },

    clearData: (state, action) => (state = []),

    selectedAnswer: (state, action) => {
      if (!action.payload) {
        return;
      }
      state[action.payload.subject].content[
        action.payload.question
      ].selectAnswer = action.payload.text;
    },
  },
});

export const { setData, clearData, selectedAnswer } = QuestionsSlice.actions;
export default QuestionsSlice.reducer;
