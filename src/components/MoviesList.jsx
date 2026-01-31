import React from "react";
import MovieCard from "./MovieCard";
import { motion } from "motion/react";

const MoviesList = ({ title, movies, type }) => {
  return (
    <div className="text-white">
      <h1 className="px-10! text-2xl font-bold">{title}</h1>

      <div className="flex py-5! gap-6 overflow-x-auto no-scrollbar px-10!">
        {movies?.map((movie) => (
          <motion.div
            key={movie.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <MovieCard movie={movie} type={type} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
