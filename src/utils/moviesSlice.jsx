import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({ 

    name: "movies",
    initialState: {
        playingNowMovies: null,
        movieTrailer: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        popularShows: null,
        onTheAirShows: null,
        airingToday: null,
        topRatedShows: null,
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
        },
        setPopularShows: (state, action)=>{
            state.popularShows = action.payload
        },
        setOnTheAirShows: (state, action)=>{
            state.onTheAirShows = action.payload
        },
        setAiringToday: (state, action)=>{
            state.airingToday = action.payload
        },
        setTopRatedShows: (state, action)=>{
            state.topRatedShows = action.payload
        },
    }


  })


  export const { setPlayingNowMovies, setMovieTrailer, setPopularMovies, setTopRated, setUpcomingMovies, setPopularShows, setOnTheAirShows, setAiringToday,setTopRatedShows} = moviesSlice.actions;
  export default moviesSlice.reducer;