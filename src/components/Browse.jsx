import React from 'react'
import Header from './Header.jsx'
import useGetMovies from '../hooks/useGetMovies.jsx'
import MainContainer from './MainContainer.jsx'
import MovieContainer from './MoviesContainer.jsx'
import usePopularMovies from '../hooks/usePopularMovies.jsx'
import { useSelector } from 'react-redux'
import useTopRated from '../hooks/useTopRated.jsx'
import useUpcomingMovies from '../hooks/useUpcomingMovies.jsx'

const Browse = () => {
useGetMovies();
usePopularMovies();
useTopRated();
useUpcomingMovies();



  return (
    <div className='w-full min-h-screen overflow-x-hidden bg-black'>
<Header/>

<MainContainer/>
<MovieContainer/>

    </div>
  )
}

export default Browse