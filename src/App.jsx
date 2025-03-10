import React from 'react'
import { createBrowserRouter,Route,RouterProvider } from 'react-router-dom'
import Mainlayout from './layout/Mainlayout'
// import Router from 'express/lib/router'
import Home from './pages/Home'
import Rabot from './pages/Rabot'
import Amstersam from './pages/Amstersam'
import Korzina from './pages/Korzina'
import Catalog from './pages/Catalog'
const App = () => {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Mainlayout/>,
      children:[
       { 
        index:true,
        element:<Home/>
       },
        {
         path:'/rabotaem',
         element:<Rabot/>
        },
        {
          path:'/amstersam',
          element:<Amstersam/>
        },
        {
          path:'/korzina',
          element:<Korzina/>
        },
        {
          path:'/catalog',
          element:<Catalog/>
        }
      ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App
