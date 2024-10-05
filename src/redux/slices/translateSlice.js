import { createSlice } from "@reduxjs/toolkit";
import { translateText } from "../actions";

const initialState = {
  isLoading: false,
  error: null,
  result: null,
};

const translateSlice = createSlice({
  name: "translate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(translateText.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(translateText.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      }),
      builder.addCase(translateText.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.result = payload;
      });
  },
});

export default translateSlice.reducer;
