// useMovieSearch.jsx
import { useDispatch } from "react-redux";
import { TMDB_OPTIONS } from "../utils/constants";
import { setResultMovies } from "../utils/querySearchSlice";

const useMovieSearch = () => {


  const movieSearchByName = async (rawQuery) => {
    if (!rawQuery?.trim()) return;

    const query = encodeURIComponent(rawQuery.trim());

    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      TMDB_OPTIONS
    );

    const data = await res.json();

   return data.results

  };

  return movieSearchByName;
};

export default useMovieSearch;
