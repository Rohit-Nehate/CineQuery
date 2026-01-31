import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices";
import moviesSlice from "./moviesSlice";
import querySlice from './querySearchSlice'
const store = configureStore({
  reducer: {
    userSlice: userSlice,
    movies: moviesSlice,
    query: querySlice
  },
});

window.__store = window.__store || store;

export default store;
