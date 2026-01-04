import React from 'react'

const VideoTitle = ({Movie}) => {

const {original_title, overview} = Movie;



  return (
    <div className='absolute z-10 top-0 left-0 h-screen w-screen text-white bg-gradient-to-r from-[#000000c3] to-transparent flex flex-col justify-center items-start p-10! '>
<div className='info w-1/3 absolute left-20! rounded-xl! px-3! py-2!'>


<h1 className='font-sans! text-4xl font-bold text-yellow-200'>{original_title}</h1>
<p className=' mt-5! w-[90%] text-l'>{overview}</p>

<button className='mt-8! cursor-pointer px-7! py-4! rounded-xl font-bold text-xl bg-[#2B7FFF]'><i class="mr-1! ri-play-large-fill "></i>Play</button>

</div>
    </div> 
  )
}

export default VideoTitle