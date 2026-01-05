import React, { use } from 'react'
import { BASE_URL } from '../utils/constants'




const MovieCard = (movie) => {

// console.log(movie.movie.poster_path)

  return (
    <div className='group relative hover:-translate-y-3 transition-transform duration-300 ease-in-out shrink-0 m-2 p-2 w-37 cursor-pointer rounded-lg overflow-hidden border-2 border-amber-400 '>
    <div className='bg-amber-400 group-hover:scale-110 transition-transform duration-300 ease-in-out '>
      <img src={BASE_URL+movie.movie.poster_path} alt="" />
    </div>
    <span className='absolute top-0 hidden group-hover:inline left-0 bg-gradient-to-t from-[#000000a5] w-full h-full'>
      
      <i className="ri-arrow-right-up-line absolute bottom-3 right-3 text-2xl font-bold border border-[#ffffff41] rounded bg-[#ffffff41]"></i>
      
      </span>
    </div>
  )
}

export default MovieCard