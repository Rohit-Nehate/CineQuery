import React from 'react'
import Header from './Header.jsx'

import MainContainer from './MainContainer.jsx'

import MoviesContainer from './MoviesContainer.jsx'
import { useSelector } from 'react-redux'


const Browse = () => {

//   const watchlist = useSelector((state) => state.movies);
// console.log(watchlist)

  return (
    <div className='w-full min-h-screen overflow-x-hidden bg-black'>


<MainContainer type={"movie"}/>
<MoviesContainer type={"movie"}/>

    </div>
  )
}

export default Browse