import { configureStore } from "@reduxjs/toolkit";
import translateSlice from "./slices/translateSlice";
import languagesSlice from "./slices/languagesSlice";

const store = configureStore({
  reducer: {
    languages: languagesSlice,
    translate: translateSlice,
  },
});

export default store;
