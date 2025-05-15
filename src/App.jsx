import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './UI/Layout'
import Home from './pages/Home'
import About from './pages/About'
import CVMaker from './pages/CVMaker'
import './App.css'
import { CVProvider } from './CVContext'
import CVPreview from './pages/CVPreview'
const routes=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/cvmaker",
        element:<CVMaker/>
      },
      {
        path:"/cvpreview",
        element:<CVPreview/>
      }
    ]
  }
])

const App = () => {
  return (
    <CVProvider>
    <RouterProvider router={routes}/>
    </CVProvider>

  )
}

export default App