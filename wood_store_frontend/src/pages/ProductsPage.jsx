import { Suspense } from "react";
import ProductsComponent from "../components/Products/Products";
import { Await, defer, json, useLoaderData } from 'react-router-dom'
import Filter from "../components/Products/Filter";
import LoadingUi from "../components/UI/LoadingUI";

export default function Products(){

    const { products } = useLoaderData();

    return (
    <div>
        <Suspense fallback={
        <div style={{margin: '0rem 12rem 0rem 12rem'}}>
            <Filter onOpen={()=>{}}/>
            <LoadingUi/>
        </div>}>
            <Await resolve={products}>
                {(loadedProducts) => <ProductsComponent products={loadedProducts}/>}
            </Await>
        </Suspense>
    </div>
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
            {id: 1, name: 'Test', price: 222.22, image: 'https://hips.hearstapps.com/hmg-prod/images/rustic-weathered-wood-logs-royalty-free-image-1654709658.jpg'}, 
            {id: 2, name: 'Test 2', price: 222.22, image: 'https://housing.com/news/wp-content/uploads/2023/04/What-is-timber-wood-and-which-are-the-best-types-f.jpg'}, 
            {id: 3, name: 'Test 3', price: 222.22, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoFNiOAwMvTAPvyCT7YjOl63ZU6irFl-TlIg&s'}
        ]
    }
}

export async function loader(){

    return defer({
        products: loadProducts(),
    });
} 