import React from 'react'
import Header from './Header.jsx'
import { TMDB_OPTIONS } from '../utils/constants.jsx'
import { useEffect } from 'react'

const Browse = () => {


const getPlayingMovies = async ()=>{  

  const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=3', TMDB_OPTIONS)
  const data = await response.json();
  console.log(data);

}


useEffect(()=>{
  getPlayingMovies();
},[])



  return (
    <div>
<Header/>


    </div>
  )
}

export default Browse