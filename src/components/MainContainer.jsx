import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = ({ type }) => {

  

  const data = useSelector(store => store.movies)

  const movies = data?.popularMovies || []
  const shows = data?.onTheAirShows || []

  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    if (type === 'movie' && movies.length > 0) {
      setSelectedItem(movies[Math.floor(Math.random()*movies.length)])
    } else if (type !== 'movie' && shows.length > 0) {
      setSelectedItem(shows[Math.floor(Math.random()*shows.length)])
    }
  }, [type, movies, shows])

  if (!selectedItem) return null

  return (
    <div className='relative w-full h-screen overflow-hidden z-0'>
      <VideoTitle Movie={selectedItem} type={type} />
      <VideoBackground
        type={type}
        movieId={selectedItem.id}
      />
    </div>
  )
}

export default MainContainer
