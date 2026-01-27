import { useEffect } from "react";
import { TMDB_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setAiringToday } from "../utils/moviesSlice";

const useGetAiringToday = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchShows = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
        TMDB_OPTIONS,
      );
      const data = await res.json();
      dispatch(setAiringToday(data.results));
    };
    fetchShows();
  }, []);
};

export default useGetAiringToday;
