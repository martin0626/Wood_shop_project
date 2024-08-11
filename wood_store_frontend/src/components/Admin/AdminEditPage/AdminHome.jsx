import { useDispatch, useSelector } from 'react-redux';
import classes from './AdminHome.module.css';
import { useEffect, useState } from 'react';
import { loadAllProducts } from '../../../store/products-actions';
import ProductsList from './AllProducts';
import ProductVisualComp from './ProductVisual';

export default function AdminHomeComp(){
    
    const dispatch = useDispatch();

    const products = useSelector(state => state.products.products);
    const currentEdited = useSelector(state => state.editableProduct.product);


    useEffect(()=>{
        dispatch(loadAllProducts());
    }, [dispatch])

    
    return(
        <div className={classes.adminHome}>
            {
                currentEdited.name
                    ?
                <ProductVisualComp product={currentEdited}/>
                    :
                <h1>No selected Product</h1>
            }
            <ProductsList products={products}/>
        </div>
    )
} 