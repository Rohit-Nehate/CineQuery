import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices";
import moviesSlice from "./moviesSlice";
const store = configureStore({
    reducer: {
        userSlice: userSlice, 
        movies: moviesSlice
    },
});

export default store;