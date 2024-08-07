import { Await, defer, json } from 'react-router-dom'
import { useLoaderData } from "react-router";
import HeaderHome from "../components/Home/HomeHeader";
import TopProducts from '../components/Home/TopProducts';
import { Suspense, useEffect, useRef } from "react";
import LoadingUi from '../components/UI/LoadingUI';
import InfoComponents from '../components/Home/InfoComponents';


export default function Home(){
    const { products } = useLoaderData();

    const topElement = useRef()

    useEffect(()=>{
        topElement.current.scrollIntoView({ behavior: 'smooth' })
    }, [])
    console.log(products);

    return (
        <div ref={topElement}>
            <HeaderHome/>
            <Suspense fallback={LoadingUi}>
                <Await resolve={products}>
                    {(loadedProds)=> <TopProducts products={loadedProds}/>}
                </Await>
                
            </Suspense>
            <InfoComponents/>
            {/* <InfoElementLeft/>
            <InfoElementRight/> */}
        </div>
    )
};



const getTop10Products = (data)=>{
    return data.slice(0, 10);
}

async function productsLoader(){
    try{
        const response = await fetch('http://localhost:8000/api/products/sort/favorites');
        
        if(!response.ok){
            throw json(
                {message: "Could not fetch products."},
                {
                    status: 500,
                }
            );
        }else{
            let data = await response.json();
            let top10 = getTop10Products(data); 
            return top10;
        }
    }catch (err){
        return {id: 3, name: 'Test 3', price: 222.22, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoFNiOAwMvTAPvyCT7YjOl63ZU6irFl-TlIg&s'}
    }
}


export async function loader(){


    return defer({
        products: productsLoader(),
    })
} 