import React from 'react'
import Header from './Header'
import { useLocation, useParams } from 'react-router-dom'

const ContentInfo = () => {
  const {seriesCode} = useParams()
  const location = useLocation()

  const movie =  location.state?.movie
  console.log(movie, seriesCode)
  return (
    <div>
        <Header/>
    </div>
  )
}

export default ContentInfo