import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({ 

    name: "movies",
    initialState: {
        playingNowMovies: null,
        movieTrailer: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null
    },

    reducers: {
        setPlayingNowMovies: (state, action) => {
            state.playingNowMovies = action.payload;
        },
        setMovieTrailer: (state, action) => {
            state.movieTrailer = action.payload;
        },
        setPopularMovies: (state, action)=>{
            state.popularMovies = action.payload
        }, 
        setTopRated: (state, action)=>{
            state.topRatedMovies = action.payload
        }, 
        setUpcomingMovies: (state, action)=>{
            state.upcomingMovies = action.payload
        }
    }


  })


  export const { setPlayingNowMovies, setMovieTrailer, setPopularMovies, setTopRated, setUpcomingMovies} = moviesSlice.actions;
  export default moviesSlice.reducer;