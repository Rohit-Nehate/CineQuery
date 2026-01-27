import { useEffect } from "react";
import { TMDB_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setAiringToday, setTopRatedShows } from "../utils/moviesSlice";

const useGetTopRatedshows = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchShows = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=3",
        TMDB_OPTIONS,
      );
      const data = await res.json();
      dispatch(setTopRatedShows(data.results));
    };
    fetchShows();
  }, []);
};

export default useGetTopRatedshows;
