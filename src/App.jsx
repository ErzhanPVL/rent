import React from 'react'
import { createBrowserRouter,Route,RouterProvider } from 'react-router-dom'
import Mainlayout from './layout/Mainlayout'
// import Router from 'express/lib/router'
import Home from './pages/Home'
import Rabot from './pages/Products'
import Amstersam from './pages/Amstersam'
import Korzina from './pages/Korzina'
// import Catalog from './pages/Catalog'
import AddAdminProduct from './pages/AddAdminProduct'
import { ToastContainer } from 'react-toastify'
import Product from './pages/Product'
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
          path:'/amstersam/:id',
          element:<Amstersam/>
        },
        {
          path:'/korzina',
          element:<Korzina/>
        },
        {
          path:'/admin',
          element:<AddAdminProduct/>
        },
        {
          path:'/product/:id',
          element:<Product/>
        }
      ]
      
    }
  ])
  return <>
          <RouterProvider router={router}/>
          <ToastContainer position="top-right" autoClose={3000} />
        </>
  }

export default App
