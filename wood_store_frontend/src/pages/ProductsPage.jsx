import { Suspense } from "react";
import ProductsComponent from "../components/Products/Products";
import { Await, defer, json, useLoaderData } from 'react-router-dom'
import Filter from "../components/Products/Filter";

export default function Products(){

    const { products } = useLoaderData();

    return (
    <Suspense fallback={
    <div style={{margin: '0rem 12rem 0rem 12rem'}}>
        <Filter onOpen={()=>{}}/>
        <div className='loader'></div>
    </div>}>
        <Await resolve={products}>
            {(loadedProducts) => <ProductsComponent products={loadedProducts}/>}
        </Await>
    </Suspense>
    );
};


async function loadProducts(){
    try{

        const response = await fetch('http://localhost:8000/api/products');
        
        if(!response.ok){
            throw json(
                {message: "Could not fetch products."},
                {
                    status: 500,
                }
            );
        }else{
            return response.json();
        }
    }catch (err){
        return [
            {id: 1, name: 'Test', price: 222.22}, 
            {id: 2, name: 'Test 2', price: 222.22}, 
            {id: 3, name: 'Test 3', price: 222.22}
        ]
    }
}

export async function loader(){

    return defer({
        products: loadProducts(),
    });
} 