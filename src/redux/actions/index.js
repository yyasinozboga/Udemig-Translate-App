import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const getLanguages = createAsyncThunk("getLanguages", async () => {
  const res = await api.get("/getLanguages");
  const data = { ...res.data.data };

  return data.languages;
});

export const translateText = createAsyncThunk(
  "translateText",
  async (params) => {
    const data = new FormData();
    data.append("source_language", params.sourceLanguage);
    data.append("target_language", params.targetLanguage);
    data.append("text", params.text);

    const res = await api.post("/translate", data);
    const newData = { ...res.data.data };

    return newData.translatedText;
  },
);
