import { useEffect } from "react";
import { TMDB_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { combineSlices } from "@reduxjs/toolkit";
import { setMovieTrailer } from "../utils/moviesSlice";


 const useMovieTrailer = (movieId) => {


const dispatch = useDispatch()



const fetchTrailer = async () => {
   
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, TMDB_OPTIONS);
    const data = await response.json();
    // console.log(data);
    const filteredTrailers = data.results.filter((video) => video.type === "Trailer" && video.site === "YouTube");
    const trailer = filteredTrailers.length > 0 ? filteredTrailers[0] : data.results[0];
    // console.log(trailer)

    dispatch(setMovieTrailer(trailer));

  }

useEffect(()=>{
fetchTrailer();

}, []) 
 }

 export default useMovieTrailer;