import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Login from './Login.jsx'
import Browse from './Browse.jsx'


const Body = () => {


  
   //creeate routers
    const appRouter = createBrowserRouter([
      {
        path: '/', 
        element: <Login/>
      }, 
      {
        path: '/browse', 
        element: <Browse/>
      }, 
    ])
  



  return (
   <RouterProvider router={appRouter}/>
  )
}

export default Body