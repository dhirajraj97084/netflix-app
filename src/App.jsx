import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import Browser from './components/Browser'
import Signup from './pages/Signup'


function App() {

  const appRouter=createBrowserRouter([
    {
     path:"/signup" ,
     element:<Signup/>
    },
    {
     path:"/" ,
     element:<Login/>
    },
    {
     path:"/browser" ,
     element:<Browser/>
    },
  ])

  return (
    <>
    <RouterProvider router={appRouter}/>
    </>
  )
}

export default App