import React from 'react'
import Header from './Header.jsx'
import useGetMovies from '../hooks/useGetMovies.jsx'
import MainContainer from './MainContainer.jsx'


const Browse = () => {
useGetMovies();


  return (
    <div>
<Header/>

<MainContainer/>

    </div>
  )
}

export default Browse