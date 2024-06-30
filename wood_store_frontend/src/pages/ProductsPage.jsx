import { Suspense } from "react";
import ProductsComponent from "../components/Products/Products";
import { Await, useSearchParams } from 'react-router-dom'
import Filter from "../components/Products/Filter";
import LoadingUi from "../components/UI/LoadingUI";
import { useSelector } from "react-redux";

export default function Products(){

    const [ searchParams ] = useSearchParams();
    const name = searchParams.get('name');

    let products = useSelector(state => state.products.products);

    if(name){
        products = products.filter(p=> p.name.toLowerCase().includes(name.toLowerCase()));
    }

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