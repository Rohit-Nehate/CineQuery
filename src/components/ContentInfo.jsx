import React from 'react'
import Header from './Header'
import { useLocation, useParams } from 'react-router-dom'
import { BASE_URL, TMDB_GENRES } from '../utils/constants'
import { DetectGPU } from '@react-three/drei'
import useGetSimilarContent from '../hooks/useGetSimilarContent'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'

const ContentInfo = () => {



  const similarContent = useSelector(store=> store.movies?.similarContent)
  // console.log(similarContent)
  
  const {seriesCode} = useParams()
  const location = useLocation()
   const [movie, type] =  location.state

// console.log(movie)

  const {id, name, title, overview,first_air_date, poster_path, backdrop_path, vote_count, release_date, genre_ids, vote_average} =  movie

    useGetSimilarContent(type, id)


  function formatDate(dateStr) {
  const [year, month, day] = dateStr.split("-");
  return `${day}-${month}-${year}`;
}

const getGenreNames = (ids = []) => 
  ids.map(id => TMDB_GENRES[id]).filter(Boolean);

  // console.log(seriesCode)

  return (
    <div className='relative'>
        <Header/>
        <img className='  w-screen h-screen overflow-hidden' src={backdrop_path?BASE_URL+backdrop_path:"/images/bg-image.png"} alt="" />
        <div className="info w-screen h-screen absolute top-0 left-0  bg-gradient-to-r from-[#010626e7] to-[#01030f4c]">
<div className='p-13! text-white flex font-bold bottom-50 absolute gap-15'>
<img src={BASE_URL+poster_path} className='w-70 border border-amber-300 rounded-2xl' alt="" />



<div className='mt-10!'>
<h1 className='font-sans! text-4xl font-bold text-white drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]'>{title||name}</h1>
<p className='mt-5! font-light!'>{release_date||first_air_date?formatDate(release_date||first_air_date):"Release date Not Found"} ▪ <i>{getGenreNames(genre_ids).join(", ")}</i></p>
<p className=' my-5!'>⭐ <b className='text-xl'>{Math.round(vote_average)}</b>/10 <i>({vote_count} Votes)</i></p>
<span className='Overview'>
  <h3 className='text-xl font-bold my-1!'>Overview</h3>
  <p className='w-[40vw] font-light'>{overview?overview:"No Overview Available"}</p>
</span>
</div>
           </div>
        </div>

        
<div className='-mt-50!'>

   <MoviesList  title={"Similar"} movies={similarContent}/>


</div>

       
      
    </div>
  )
}

export default ContentInfo