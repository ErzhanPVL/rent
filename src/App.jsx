import React from 'react'
import { createBrowserRouter,Route,RouterProvider } from 'react-router-dom'
import Mainlayout from './layout/Mainlayout'
// import Router from 'express/lib/router'
import {AddAdminProduct,Amstersam,Home,Korzina,Product,Products,Allproducts, EditProduct} from './pages/index'
// import Catalog from './pages/Catalog'
import { ToastContainer } from 'react-toastify'
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
         element:<Products/>
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
          path:"/edit" ,
          element:<EditProduct />
        },
        {
          path:'/admin',
          element:<AddAdminProduct/>
        },
        {
          path:'allProducts',
          element:<Allproducts/>
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
