import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPopularMovies } from "../utils/moviesSlice";
import { TMDB_OPTIONS } from "../utils/constants";


const usePopularMovies= () =>{ 
    
      const dispatch = useDispatch();
   
    
    useEffect(()=>{
 
    const getPlayingMovies = async ()=>{  
    
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', TMDB_OPTIONS)
      const data = await response.json();
      dispatch(setPopularMovies(data.results));
    // console.log(data.results)
    }
    

      getPlayingMovies();
    },[])

    
}

export default usePopularMovies;