import { Suspense, useEffect, useRef } from "react";
import ProductsComponent from "../components/Products/Products";
import { Await, useSearchParams } from 'react-router-dom'
import Filter from "../components/Products/Filter";
import LoadingUi from "../components/UI/LoadingUI";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";
import FilterPin from "../components/Products/ClearFilterPin";

export default function Products(){

    const [ searchParams ] = useSearchParams();
    const name = searchParams.get('name');
    const dispatch = useDispatch();
    const topElement = useRef();

    const isSorted =  useSelector(state => state.products.isSorted);

    let products = useSelector(state => state.products.products);
    let filteredProducts = [];

    if(name){
        filteredProducts = products.filter(p=> p.name.toLowerCase().includes(name.toLowerCase()));
        filteredProducts.length === 0 && dispatch(uiActions.setSingleNotification({message: `There is no products with name "${name}".`, header: 'No results.' }))
    }

    products = filteredProducts.length > 0 ? filteredProducts : products;

    

    useEffect(()=>{
        topElement.current.scrollIntoView({ behavior: 'smooth' })
    }, [])

    return (
        <div ref={topElement}>
            {isSorted && <FilterPin/>}
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