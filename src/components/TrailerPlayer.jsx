import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTrailerplaying } from '../utils/moviesSlice';

const TrailerPlayer = () => {

  const trailer = useSelector((store) => store.movies?.movieTrailer);
  const dispatch = useDispatch()

  const playTrailer = ()=>{
dispatch(toggleTrailerplaying())
  }
    if (!trailer || !trailer.key) return null
  return (
  
   
   
  <div className='absolute w-screen h-screen bg-[#1901013e]  backdrop-blur-sm flex justify-center items-center inset-0 overflow-hidden z-3000'>

<div className='w-[80%] h-[80%] rounded-2xl overflow-hidden'>

  {

trailer?
<iframe className='w-full h-full' src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=1&rel=0&loop=1&playlist=${trailer?.key}&modestbranding=1`}></iframe>:<h1>NO Trailer available</h1>
    
      }

    </div>

    <span onClick={playTrailer} className='group absolute top-8 right-15 px-2! py-1.5! cursor-pointer border border-white hover:bg-[#ffffff79] hover:border-black rounded-4xl backdrop-blur-sm  bg-[#00000079]'><i className="ri-close-line group-hover:text-black text-[#ffff] font-bold text-3xl"></i></span>
    </div>
  )
}

export default TrailerPlayer    