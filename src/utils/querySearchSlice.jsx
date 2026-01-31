import { createSlice } from "@reduxjs/toolkit";

const querySlice = createSlice({
  name: "querySlice",
  initialState: {
    queryEnabled: false,
    resultMovies: null,
    isLoading: false,
  },
  reducers: {
    toggleQueryEnabled: (state, action) => {
      state.queryEnabled = !state.queryEnabled;
    },
    setResultMovies: (state, action) => {
      state.resultMovies = action.payload;
    },
    clearResultMovies: (state) => {
      state.resultMovies = null;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  toggleQueryEnabled,
  setResultMovies,
  clearResultMovies,
  setLoading,
} = querySlice.actions;
export default querySlice.reducer;
