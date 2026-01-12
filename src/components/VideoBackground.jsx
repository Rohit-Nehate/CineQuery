import React, { use } from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId, type}) => {
// console.log(movieId)
  const trailer = useSelector((store) => store.movies?.movieTrailer);

useMovieTrailer(movieId, type);
//  console.log(movieId)

  return (
    <div className='absolute inset-0 overflow-hidden'>
<iframe className='aspect-video! absolute top-1/2 left-1/2 w-[120vw] h-[120vh] -translate-x-1/2 -translate-y-1/2 ' src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=${trailer?.key}&modestbranding=1`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
  )
}

export default VideoBackground