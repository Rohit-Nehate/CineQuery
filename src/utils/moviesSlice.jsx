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
        similarContent: null,
        watchlist: null,
        trailerPlaying: false,

    },

    reducers: {
        setPlayingNowMovies: (state, action) => {
            state.playingNowMovies = action.payload;
        },
        setMovieTrailer: (state, action) => {
            state.movieTrailer = action.payload;
        },
         resetMovieTrailer: (state, action) => {
            state.movieTrailer = null;
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
        setSimilarContent: (state, action)=>{
            state.similarContent = action.payload
        },
        resetSimilarContent: (state, action)=>{
            state.similarContent = null
        },
        setWatchlist: (state, action)=>{
            state.watchlist = action.payload
        },
        toggleTrailerplaying:(state)=>{
            state.trailerPlaying = !state.trailerPlaying
        }
    }


  })


  export const { setPlayingNowMovies, setMovieTrailer, setPopularMovies, setTopRated, setUpcomingMovies, setPopularShows, setOnTheAirShows, setAiringToday,setTopRatedShows, setSimilarContent, toggleTrailerplaying, resetMovieTrailer, setWatchlist,resetSimilarContent } = moviesSlice.actions;
  export default moviesSlice.reducer;