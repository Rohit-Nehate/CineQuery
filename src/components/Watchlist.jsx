import React, { use, useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { clearWatchlistFromDB, getWatchlist } from "../hooks/useWatchList";
import MovieCard from "./MovieCard";
import toast, { Toaster } from "react-hot-toast";
import { clearWatchlist } from "../utils/moviesSlice";
import { motion } from "motion/react";

const Watchlist = () => {
  const dispatch = useDispatch();

  const watchlist = useSelector((store) => store.movies?.watchlist);

  const handleClearWatchlist = async () => {
    if (!watchlist || watchlist.length === 0) {
      toast.error("No Item In Watchlist To Clear");
      return;
    }
     clearWatchlistFromDB();
    dispatch(clearWatchlist())
    toast.success("Watchlist Cleared Successfully");
  };

  console.log(watchlist);

  useEffect(() => {
    //   getWatchlist(dispatch)
  }, [watchlist]);


  return (
    <div className="bg-[#212121] w-full min-h-full ">
      <Toaster position="top-right" />
      <Header />
      <div className="pt-30! px-12!">
        <button
          onClick={handleClearWatchlist}
          className="mt-4 px-6! py-2! cursor-pointer bg-red-600 text-white rounded-full hover:bg-red-800 transition-colors duration-100"
        >
          CLEAR WATCHLIST
        </button>

        {watchlist && watchlist.length > 0 ? (
          <div className="flex gap-5 flex-wrap mt-8! mb-8!">
            {watchlist.map((movie) => (
              <motion.dev
              key={movie.id}
              initial={{opacity: 0, y:20 }}
              animate={{opacity:1, y:0}}
              transition={{duration: .5, ease: 'easeOut'}}
              
              
              >

              
              <MovieCard  movie={movie} type={movie.type} />
              </motion.dev>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <h1 className="text-white text-5xl">NO ITEMS IN WATCHLIST</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
