import { useState } from 'react';
import classes from './AllProducts.module.css';
import SingleAdminProduct from './SingleAdminProd';

export default function ProductsList({products, onSelect}){

    const [ visibleProducts, setVisibleProducts ] = useState(products);

    const handleSearch = (e)=>{
        let input = e.target.value.toLowerCase();
        let filteredProducts = products.filter(p => p.name.toLowerCase().includes(input));
        
        setVisibleProducts(filteredProducts);

        if(input.length === 0){
            setVisibleProducts(products)
        }
    }

    debugger

    return(
        <section className={classes.allProducts}>
            {/* <input onChange={handleSearch} type="text" /> */}
            <div className={classes.searchNav}>
                <input placeholder='Search...' onChange={handleSearch} className={classes.searchInput} type="text" />
                <p className={classes.searchIcon}><i className="material-icons">search</i></p>
            </div>
            {products 
                    ? 
                        visibleProducts.length > 0 
                        ? 
                            visibleProducts.map(pr=> {
                                return <SingleAdminProduct product={pr} handleSelect={onSelect}/>
                            }) 
                        : 
                            products.map(pr=> {
                                return <SingleAdminProduct product={pr} handleSelect={onSelect}/>
                            }) 
                    :
                        <h1>No Products</h1>
        }
        </section>
    )
}