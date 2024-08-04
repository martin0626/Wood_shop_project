import { useDispatch, useSelector } from 'react-redux';
import classes from './AdminHome.module.css';
import { useEffect, useState } from 'react';
import { loadAllProducts } from '../../store/products-actions';
import ProductsList from './AllProducts';
import ProductVisualComp from './ProductVisual';

export default function AdminHomeComp(){
    
    const dispatch = useDispatch();

    const products = useSelector(state => state.products.products);
    const [ selectedProduct, setSelectedProduct ] = useState(null)

    useEffect(()=>{
        dispatch(loadAllProducts());
    }, [dispatch])

    useEffect(() => {
        if (products.length > 0) {
            setSelectedProduct(products[0]);
        }
    }, [products]);


    const handleSelect = (id)=>{
        const product = products.find(p=> p.id === id);
        setSelectedProduct(product);
    }


    return(
        <div className={classes.adminHome}>
            <ProductVisualComp product={selectedProduct}/>
            <ProductsList onSelect={handleSelect} products={products}/>
        </div>
    )
} 