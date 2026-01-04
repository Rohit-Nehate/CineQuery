import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({ 

    name: "movies",
    initialState: {
        playingNowMovies: null,
        movieTrailer: null,
    },

    reducers: {
        setPlayingNowMovies: (state, action) => {
            state.playingNowMovies = action.payload;
        },
        setMovieTrailer: (state, action) => {
            state.movieTrailer = action.payload;
        }
    }


  })


  export const { setPlayingNowMovies, setMovieTrailer} = moviesSlice.actions;
  export default moviesSlice.reducer;