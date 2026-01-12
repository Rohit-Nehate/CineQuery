import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({title, movies, type}) => {
  return (
    <div className='text-white'>

<h1 className=' px-10! text-2xl font-bold'>{title}</h1>
 <div className='flex py-5! gap-6 overflow-x-auto no-scrollbar px-10!'>{movies?.map((movie)=>(
            <MovieCard key={movie.id} movie={movie} type={type}/>
        ))}
</div>
        

    </div>
  )
}

export default MoviesList