import axios from "axios";

const api = axios.create({
  baseURL: "https://text-translator2.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "c3202f5227mshefb2446baaf43e6p1b2232jsn6cc6e405ba66",
    "x-rapidapi-host": "text-translator2.p.rapidapi.com",
  },
});

export default api;
