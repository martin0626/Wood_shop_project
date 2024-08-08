import classes from './SingleAdminProd.module.css';


export default function SingleAdminProduct({product, handleSelect}){
    return (
        <div key={product.index} onClick={()=>handleSelect(product.id)} className={classes.productDiv}>
            <h1>{product.name}</h1>
        </div>
    )
}