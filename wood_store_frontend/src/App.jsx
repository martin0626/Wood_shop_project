import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Root from './pages/RootPage'
import Home from './pages/HomePage'
import Products, { loader as productLoaders } from './pages/ProductsPage'
import { loader as productDetailsLoader } from './pages/ProductDetailsPage'
import ProdDetails from './pages/ProductDetailsPage'
import Order from './pages/OrederPage'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: 'products',
        element: <Products/>,
        loader: productLoaders,
      },
      {
        path: 'products/:id',
        element: <ProdDetails/>,
        loader: productDetailsLoader,
      },
      {
        path: 'order',
        element: <Order/>
      }
    ]
  }
])



function App() {
  return <RouterProvider router={router}/>;
};

export default App
