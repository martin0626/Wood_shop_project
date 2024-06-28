import classes from './CheckoutItem.module.css'

export default function CheckOutItem({product}){
    return(
        <div className={classes.checkoutItem}>
            <h2 className={classes.cartItemName}>{product.name}</h2>
            <div>
                <a style={{fontSize: '1.8rem', fontWeight: 'bold'}}>{product.price.toFixed(2)}</a><a> BGN</a>
            </div>
            <p style={{fontSize: '1.8rem', fontWeight: 'bold'}}>x{product.userQuantity}</p>
        </div>
    )
}