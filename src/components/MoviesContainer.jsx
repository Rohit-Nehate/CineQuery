import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'

const MoviesContainer = ({type}) => {

    const movies = useSelector((
        (store)=> store.movies))
    
if(!movies) return null
  return (
    <div className='relative z-20 -mt-55!'>
        
        <MoviesList type={type} title={type=="movie"?"Now Playing":"Airing Today"} movies={type=="movie"?movies?.playingNowMovies:movies?.airingToday}/>
        <MoviesList type={type} title={type=="movie"?"Popular Movies":"Popular Shows"} movies={type=="movie"?movies?.popularMovies:movies?.popularShows}/>
        <MoviesList type={type} title={type=="movie"?"Top-Rated Movies":"Top-Rated Shows"} movies={type=="movie"?movies?.topRatedMovies:movies?.topRatedShows}/>
        <MoviesList type={type} title={type=="movie"?"Upcoming Movies":"On The Air SHows"} movies={type=="movie"?movies?.upcomingMovies:movies?.onTheAirShows}/>

    </div>
  )
}

export default MoviesContainer