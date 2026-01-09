import React from 'react'
import useGetPopularShows from '../hooks/useGetPopularShows.jsx'
import MainContainer from './MainContainer.jsx'
import MoviesContainer from './MoviesContainer.jsx'

const TvShows = () => {
console.log("loaded tvshows")
  return (
    <div className='bg-[#ff0000] w-screen h-screen'>
<MainContainer type={"show"}/>
<MoviesContainer type={"show"}/>
    </div>
  )
}

export default TvShows