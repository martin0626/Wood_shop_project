import { useEffect } from 'react'
import './App.css'
import Root from './pages/RootPage'
import Home, { loader as homeLoader } from './pages/HomePage'

import Products from './pages/ProductsPage'
import { loader as productDetailsLoader } from './pages/ProductDetailsPage'
import ProdDetails from './pages/ProductDetailsPage'
import Checkout from './pages/CheckOutPage'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from 'react-redux'
import { loadAllProducts } from './store/products-actions'
import OrderPage, { loader as orderLoader } from './pages/Order'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        index: true,
        element: <Home/>,
        loader: homeLoader,
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
        path: 'checkout',
        element: <Checkout/>
      },
      {
        path: 'order',
        element: <OrderPage/>,
        loader: orderLoader,
      },
    ]
  }
])



function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(loadAllProducts());
  }, [dispatch]);


  return <RouterProvider router={router}/>;
};

export default App
