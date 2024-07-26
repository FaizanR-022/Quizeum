import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "info",
  initialState: {
    program: "",
    level: "",
  },

  reducers: {
    selectProgram: (state, action) => {
      state.program = action.payload;
    },

    selectLevel: (state, action) => {
      state.level = action.payload;
    },
  },
});

export const { selectProgram, selectLevel } = Slice.actions;
export default Slice.reducer;
