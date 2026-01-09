import React, { use } from 'react'
import { BASE_URL } from '../utils/constants'
import { Link, Links } from 'react-router-dom'




const MovieCard = (movie) => {

// console.log(movie.movie.poster_path)
// console.log(movie)

  return (
    <Link to={`/moreinfo/${movie.movie.id}`} state={movie}>
    <div className='group relative hover:-translate-y-3 transition-transform duration-300 ease-[cubic-bezier(0.19,0.57,0.57,1.10)] shrink-0 m-2 p-2 w-37 cursor-pointer rounded-lg overflow-hidden border-2 border-amber-400 '>
    <div className='bg-amber-400 group-hover:scale-110 transition-transform duration-300 ease-[cubic-bezier(0.19,0.57,0.57,1.10)] '>
      <img src={BASE_URL+movie.movie.poster_path} alt="" />
    </div>
    <span className='absolute top-0 hidden group-hover:inline left-0 bg-gradient-to-t from-[#000000a5] w-full h-full'>
      
      <i className="ri-arrow-right-up-line absolute bottom-3 right-3 text-2xl font-bold hover:border-[#0000006a] border border-[#ffffff41] rounded hover:bg-[#0000006a] bg-[#ffffff41]"></i>
      
      </span>
    </div>
    </Link>
  )
}

export default MovieCard