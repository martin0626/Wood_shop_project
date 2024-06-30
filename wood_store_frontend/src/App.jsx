import { useEffect } from 'react'
import './App.css'
import Root from './pages/RootPage'
import Home from './pages/HomePage'
import Products from './pages/ProductsPage'
import { loader as productDetailsLoader } from './pages/ProductDetailsPage'
import ProdDetails from './pages/ProductDetailsPage'
import Order from './pages/OrederPage'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from 'react-redux'
import { fetchProductData } from './store/products-actions'



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

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchProductData())
  }, [dispatch]);


  return <RouterProvider router={router}/>;
};

export default App
