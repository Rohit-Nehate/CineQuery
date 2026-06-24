import React from "react";
import { Link } from "react-router-dom";

const VideoTitle = ({ Movie, type }) => {
  // console.log(Movie)
  const { title, name, overview } = Movie;

  return (
    <div className="absolute z-1 top-0 left-0 h-screen w-screen text-white bg-gradient-to-r from-[#000000c3] to-transparent flex flex-col justify-center items-start p-4! md:p-10! ">
      <div className="info absolute bottom-30! md:bottom-80! left-4! md:left-10! rounded-xl! px-3! py-2!">
        <h1 className="font-sans! text-2xl md:text-4xl font-bold text-yellow-200 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
          {title || name}
        </h1>
        <p className="w-[90%] md:w-1/3 mt-3! md:mt-5! text-sm md:text-l line-clamp-3 md:line-clamp-none drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]">
          {overview}
        </p>
        <Link to={`/moreinfo/${Movie.id}`} state={[Movie, type]}>
          <button className="mt-4! md:mt-8! cursor-pointer px-5! md:px-7! py-3! md:py-4! rounded-xl hover:bg-[#012d70] font-bold text-base md:text-xl bg-[#2B7FFF]">
            <i className="mr-1! ri-error-warning-line "></i>More Info
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VideoTitle;
