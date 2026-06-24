import React, { useRef } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import {
  clearResultMovies,
  setResultMovies,
  toggleQueryEnabled,
  setLoading,
} from "../utils/querySearchSlice";
import useMovieSearch from "../hooks/useMovieSearch";
import MovieCard from "./MovieCard";
import useGetQueryMovie from "../hooks/useGetQueryMovie";
import { motion } from "motion/react";
const QuerySearch = () => {
  const dispatch = useDispatch();
  const searchRef = useRef();

  const queryEnabled = useSelector((store) => store.query.queryEnabled);
  const moviesResult = useSelector((store) => store.query.resultMovies);
  const isLoading = useSelector((store) => store.query.isLoading);

  const getResultMovies = useMovieSearch();
  const getQueryMovies = useGetQueryMovie();

  const handleResultMovies = async () => {
    const query = searchRef.current.value.trim();
    if (!query) return;

    dispatch(setLoading(true));
    dispatch(clearResultMovies());

    if (!queryEnabled) {
      const movies = await getResultMovies(query);
      dispatch(setResultMovies(movies));
    } else {
      const keywords = await getQueryMovies(query);

      const promises = keywords.map((word) => getResultMovies(word));

      const results = await Promise.all(promises);
      dispatch(setResultMovies(results.flat()));
    }

    dispatch(setLoading(false));
  };

  return (
    <>
      <Header />

      {/* LOADING  */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-black/80 flex flex-col items-center justify-center">
          <div className="h-14 w-14 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mb-6"></div>
          <h2 className="text-xl font-semibold text-white">Please wait</h2>
          <p className="text-sm text-gray-400 mt-1">Loading your movies…</p>
        </div>
      )}

      <div className="py-20! px-4! md:px-13! w-full min-h-full! bg-[#212121] text-white">
        <div className="w-full flex justify-center mt-10! md:mt-20!">
          <motion.form
           initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="
              group flex w-[95%] md:w-[60%] items-center
              bg-[#2a2a2a] rounded-full overflow-hidden
              transition-all duration-300
              shadow-[0_20px_60px_rgba(0,0,0,0.6)]
              focus-within:ring-2 focus-within:ring-blue-500/60
            "
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="cursor-pointer ml-2! md:ml-4!">
              <input
                checked={queryEnabled}
                onChange={() => dispatch(toggleQueryEnabled())}
                type="checkbox"
                className="peer hidden"
              />
              <div
                className="
                px-2! md:px-3! py-2! rounded-full flex items-center gap-1 md:gap-2
                text-xs font-semibold bg-neutral-800 border border-white/30
                peer-checked:bg-gradient-to-r
                peer-checked:from-[#0400ff]
                peer-checked:to-[#4ce3f7]
              "
              >
                <i className="ri-bard-line text-base md:text-lg"></i>
                <span className="hidden sm:inline">Query</span>
              </div>
            </label>

            <input
              ref={searchRef}
              className="
                w-full px-3! md:px-6! py-3! md:py-4!
                text-sm md:text-base text-white bg-transparent
                focus:outline-none placeholder:text-neutral-400
              "
              placeholder={
                queryEnabled
                  ? "e.g Horror Comedy Bollywood Masala"
                  : "e.g Avengers Endgame"
              }
            />

            <button
              onClick={handleResultMovies}
              className="
                flex items-center gap-1 md:gap-2 px-4! md:px-8! py-3! md:py-4!
                font-semibold text-white text-sm md:text-base
                bg-gradient-to-r from-blue-600 to-cyan-400
                    hover:from-[#00418b] hover:to-[#1f6fe5]
              "
            >
              <i
                className={`${
                  queryEnabled ? "ri-search-ai-2-line" : "ri-search-line"
                } text-xl md:text-2xl`}
              />
              <span className="hidden sm:inline">SEARCH</span>
            </button>
          </motion.form>
        </div>

        {/* CARDS */}
        <div className="mt-10! w-full flex flex-wrap gap-4 md:gap-8 justify-center md:justify-start">
          {!moviesResult ? (
            <div className="w-full flex justify-center mt-16! md:mt-30!">
              <img src="/images/thinking.gif" alt="" className="w-48 md:w-auto" />
            </div>
          ) : moviesResult.length === 0 ? (
            <div className="w-full flex flex-col items-center justify-center mt-16! md:mt-30!">
              <i className="ri-search-line text-5xl md:text-6xl mb-4 opacity-60"></i>
              <h2 className="text-base md:text-lg font-semibold text-gray-300">
                No results found
              </h2>
            </div>
          ) : (
            moviesResult.map((movie) => (
              <MovieCard movie={movie} type="movie" />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default QuerySearch;
