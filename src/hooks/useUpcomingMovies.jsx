import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPopularMovies,
  setTopRated,
  setUpcomingMovies,
} from "../utils/moviesSlice";
import { TMDB_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPlayingMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=10",
        TMDB_OPTIONS,
      );
      const data = await response.json();
      dispatch(setUpcomingMovies(data.results));
      // console.log(data.results)
    };

    getPlayingMovies();
  }, []);
};

export default useUpcomingMovies;
