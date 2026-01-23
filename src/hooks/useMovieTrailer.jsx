import { useEffect } from "react";
import { TMDB_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { resetMovieTrailer, setMovieTrailer } from "../utils/moviesSlice";


 const useMovieTrailer = (movieId, type) => {

const dispatch = useDispatch()




const fetchTrailer = async () => {
   
    const response = await fetch(`https://api.themoviedb.org/3/${type=="movie"?"movie":"tv"}/${movieId}/videos`, TMDB_OPTIONS);
    const data = await response.json();
    // console.log(data);
    const filteredTrailers = data.results.filter((video) => video.type === "Trailer");
    const trailer = filteredTrailers.length > 0 ? filteredTrailers[0] : data.results[0];
    // console.log(trailer)

    dispatch(setMovieTrailer(trailer));

  }

useEffect(()=>{
  dispatch(resetMovieTrailer())
fetchTrailer();
// console.log("trailer called")

}, [movieId, type, dispatch]) 
 }

 export default useMovieTrailer;