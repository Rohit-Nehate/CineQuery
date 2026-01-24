import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login.jsx'
import Browse from './Browse.jsx'
import PublicRoute from '../utils/PublicRoute.jsx'
import TvShows from './TvShows.jsx'
import BrowserLayout from './BrowserLayout.jsx'
import MovieCard from './MovieCard.jsx'
import ContentInfo from './ContentInfo.jsx'
import Watchlist from './Watchlist.jsx'
import Movie404 from './Movie404.jsx'

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: '/', 
      element: (
        <PublicRoute>
          <Login />
        </PublicRoute>
      ),
      errorElement: <Movie404/>,
    }, 
    {
      path: '/browse', 
      element: <BrowserLayout />,
      children: [
        {
          index: true,       
          element: <Browse />
        }, 
        {
          path: 'shows', 
          element: <TvShows />
        }, 
        {
          path: 'watchlist',
          element: <Watchlist />,
        }
       
      ]
    },
     {
          path: 'moreinfo/:seriesCode',
          element: <ContentInfo />
        },
        
  ])

  return <RouterProvider router={appRouter} />
}

export default Body
