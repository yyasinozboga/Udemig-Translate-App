import { createSlice } from "@reduxjs/toolkit";
import { getLanguages } from "../actions";

const initialState = {
  isLoading: false,
  error: null,
  languages: [],
};

const languagesSlice = createSlice({
  name: "languages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLanguages.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getLanguages.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      }),
      builder.addCase(getLanguages.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.languages = payload;
      });
  },
});

export default languagesSlice.reducer;
