import { useState } from 'react';
import classes from './AllProducts.module.css';
import SingleAdminProduct from './SingleAdminProd';
import { useDispatch } from 'react-redux';

export default function ProductsList({products}){

    const [ visibleProducts, setVisibleProducts ] = useState(products);

    const handleSearch = (e)=>{
        let input = e.target.value.toLowerCase();
        let filteredProducts = products.filter(p => p.name.toLowerCase().includes(input));
        
        setVisibleProducts(filteredProducts);

        if(input.length === 0){
            setVisibleProducts(products)
        }
    }

    

    return(
        <section className={classes.allProducts}>
            <div className={classes.searchNav}>
                <input placeholder='Search...' onChange={handleSearch} className={classes.searchInput} type="text" />
                <p className={classes.searchIcon}><i className="material-icons">search</i></p>
            </div>
            {products 
                    ? 
                        visibleProducts.length > 0 
                        ? 
                            visibleProducts.map(pr=> {
                                return <SingleAdminProduct product={pr} />
                            }) 
                        : 
                            products.map(pr=> {
                                return <SingleAdminProduct product={pr} />
                            }) 
                    :
                        <h1>No Products</h1>
        }
        </section>
    )
}