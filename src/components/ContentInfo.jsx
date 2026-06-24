import React, { useEffect } from "react";
import Header from "./Header";
import { useLocation, useParams } from "react-router-dom";
import { BASE_URL, TMDB_GENRES } from "../utils/constants";
import { DetectGPU } from "@react-three/drei";
import useGetSimilarContent from "../hooks/useGetSimilarContent";
import { useDispatch, useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import useMovieTrailer from "../hooks/useMovieTrailer";
import TrailerPlayer from "./TrailerPlayer";
import { toggleTrailerplaying } from "../utils/moviesSlice";
import {
  addToWatchlist,
  getWatchlist,
  removeFromWatchlist,
} from "../hooks/useWatchList";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "motion/react";

const ContentInfo = () => {
  const similarContent = useSelector((store) => store.movies?.similarContent);
  const trailerPlaying = useSelector((store) => store.movies?.trailerPlaying);
  const watchlist = useSelector((store) => store.movies?.watchlist) || [];
  const dispatch = useDispatch();

  const { seriesCode } = useParams();
  const location = useLocation();
  const [movie, type] = location.state;

  const {
    id,
    name,
    title,
    overview,
    first_air_date,
    poster_path,
    backdrop_path,
    vote_count,
    release_date,
    genre_ids,
    vote_average,
  } = movie;

  useGetSimilarContent(type, id);

  function formatDate(dateStr) {
    const [year, month, day] = dateStr.split("-");
    return `${day}-${month}-${year}`;
  }

  const getGenreNames = (ids = []) =>
    ids.map((id) => TMDB_GENRES[id]).filter(Boolean);

  //handelers
  useMovieTrailer(id, type);

  const trailer = useSelector((store) => store.movies?.movieTrailer);

  const playTrailer = () => {
    if (!trailer) {
      alert("Trailer Not Available");

      return;
    }

    dispatch(toggleTrailerplaying());
  };
  const inList = watchlist.some((item) => item.id === id);
  const handleWatchlist = async () => {
    if (inList) {
      removeFromWatchlist(id);
      getWatchlist(dispatch);
      toast.error("Removed from Watchlist");
      return;
    }
    addToWatchlist(movie, type);
    getWatchlist(dispatch);
    toast.success("Added to Watchlist");
  };

  //toast notifications

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {trailerPlaying && <TrailerPlayer />}

      <div className="relative">
        <Toaster position="top-center" />
        <Header />
        <img
          className="w-screen h-[60vh] md:h-screen object-cover overflow-hidden"
          src={
            backdrop_path ? BASE_URL + backdrop_path : "/images/bg-image.png"
          }
          alt=""
        />
        <div className="info w-screen min-h-[60vh] md:h-screen absolute top-0 left-0 bg-gradient-to-r from-[#010626e7] to-[#01030f4c]">
          <motion.div 
          
          initial={{opacity: 0, x:-10}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: .5, ease: 'easeInOut'}}
          
          className="p-4! md:p-13! text-white flex flex-col md:flex-row font-bold bottom-4! md:bottom-50 absolute gap-6 md:gap-15">
            <img
              src={BASE_URL + poster_path}
              className="w-40 md:w-70 mx-auto md:mx-0 border border-amber-300 rounded-2xl"
              alt=""
            />

            <div className="mt-2! md:mt-10! text-center md:text-left">
              <h1 className="font-sans! text-2xl md:text-4xl font-bold text-white drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
                {title || name}
              </h1>
              <p className="mt-3! md:mt-5! text-sm md:text-base font-light!">
                {release_date || first_air_date
                  ? formatDate(release_date || first_air_date)
                  : "Release date Not Found"}{" "}
                ▪ <i>{getGenreNames(genre_ids).join(", ")}</i>
              </p>
              <span className="flex gap-3 md:gap-5 items-center justify-center md:justify-start">
                <p className="my-3! md:my-5!">
                  ⭐ <b className="text-lg md:text-xl">{Math.round(vote_average)}</b>/10{" "}
                  <i>({vote_count} Votes)</i>
                </p>
                <i
                  title={inList ? "Remove from watchlist" : "Add to watchlist"}
                  onClick={handleWatchlist}
                  className={`${inList ? "ri-bookmark-fill" : "ri-bookmark-line"} px-3! py-2! cursor-pointer rounded-full ${inList ? "bg-[#ffe100]" : "bg-[#838383]"} text-xl md:text-2xl font-light active:scale-90
    transition-all `}
                ></i>
              </span>
              <span className="Overview">
                <h3 className="text-lg md:text-xl font-bold my-1!">Overview</h3>
                <p className="w-full md:w-[40vw] text-sm md:text-base font-light">
                  {overview ? overview : "No Overview Available"}
                </p>
              </span>

              <button
                onClick={playTrailer}
                disabled={!trailer}
                className={`disabled:bg-[#323232] rounded-2xl mt-4! md:mt-5! px-4! py-3! md:py-4! text-sm md:text-base bg-blue-500 ${trailer ? "cursor-pointer" : "cursor-not-allowed"} active:scale-95
    transition-all duration-200`}
              >
                {trailer ? (
                  <i className="ri-play-large-fill"></i>
                ) : (
                  <i className="ri-error-warning-line text-xl md:text-2xl"></i>
                )}{" "}
                {trailer ? "PLAY TRAILER" : "TRAILER NOT AVAILABLE"}
              </button>
            </div>
          </motion.div>
        </div>

        <div className="mt-0 md:-mt-50!">
          <MoviesList type={type} title={"Similar"} movies={similarContent} />
        </div>
      </div>
    </>
  );
};

export default ContentInfo;
