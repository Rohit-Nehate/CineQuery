import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.playingNowMovies);
    if(!movies) return null;
    const randomMovieIndex = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[randomMovieIndex];
console.log(randomMovie)
  return (
    <div>
        <VideoTitle Movie={randomMovie}/>
        <VideoBackground movieId={randomMovie.id}/>
    </div>
  )
}

export default MainContainer