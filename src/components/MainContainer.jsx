import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import MoviesContainer from './MoviesContainer';
const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.popularMovies);
    if(!movies) return null;
    const randomMovieIndex = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[randomMovieIndex];
// console.log(randomMovie)
  return (
    <div className=' relative w-full h-screen overflow-hidden z-0'>
        <VideoTitle Movie={randomMovie}/>
        <VideoBackground movieId={randomMovie.id}/>
        
    </div>
  )
}

export default MainContainer