import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'

const MoviesContainer = () => {

    const movies = useSelector((
        (store)=> store.movies))
    
if(!movies) return null
  return (
    <div className='relative z-20 -mt-55!'>
        
        <MoviesList title={"Now Playing"} movies={movies?.playingNowMovies}/>
        <MoviesList title={"Popular Movies"} movies={movies?.popularMovies}/>
        <MoviesList title={"Top-Rated Movies"} movies={movies?.topRatedMovies}/>
        <MoviesList title={"Upcoming Movies"} movies={movies?.upcomingMovies}/>

    </div>
  )
}

export default MoviesContainer