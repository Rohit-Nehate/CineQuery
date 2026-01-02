import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices";
const store = configureStore({
    reducer: {
        userSlice: userSlice
    },
});

export default store;