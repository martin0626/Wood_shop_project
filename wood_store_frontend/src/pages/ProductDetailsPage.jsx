import { Suspense } from "react";
import DetailsProduct from "../components/Details/DetailsProduct";
import { Await, defer, json, useLoaderData } from 'react-router-dom'
import LoadingUi from "../components/UI/LoadingUI";



export default function ProdDetails(){

    const {product} = useLoaderData();

    

    return (
        <Suspense fallback={
            <LoadingUi/>
        }>
            <Await resolve={product}>
                {(loadedProduct)=> <DetailsProduct product={loadedProduct}/>}
            </Await>
        </Suspense>
    );
};



async function productLoader(id){
    try{
        const response = await fetch('http://localhost:8000/api/products/' + id);
        
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
        return {id: 3, name: 'Test 3', price: 222.22, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoFNiOAwMvTAPvyCT7YjOl63ZU6irFl-TlIg&s'}
    }
}


export async function loader({request, params}){

    const id = params.id;

    return defer({
        product: productLoader(id),
    })
} 