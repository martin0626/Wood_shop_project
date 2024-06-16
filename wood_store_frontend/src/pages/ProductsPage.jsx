import ProductsComponent from "../components/Products/Products";
import { json } from 'react-router-dom'

export default function Products(){
    return (
    <>
        <ProductsComponent/>
    </>
    );
};


export async function loader(){
    const response = await fetch('http://localhost:8000/api/products');

    if(!response.ok){
        throw json(
            {message: "Could not fetch products."},
            {
                status: 500,
            }
        );
    }else{
        return response;
    }
}