import { useDispatch } from 'react-redux'
import classes from './CartItem.module.css'
import { cartActions } from '../../store/cart-slice';

export default function CartItem({product}){
    
    const dispatch = useDispatch();

    const handleAddQauntity = ()=>{
        dispatch(cartActions.additemToCart({...product, userQuantity: 1}));
    }

    const handleRemoveQauntity = ()=>{
        dispatch(cartActions.removeItemFromCart({id: product.id}));
    }

    return (
        <div id={product.id} className={classes.cartItem}>
            <h2 className={classes.cartItemName}>{product.name}</h2>
            <div className={classes.cartItemPrice}>
                <a style={{fontSize: '1.8rem', fontWeight: 'bold'}}>{product.price.toFixed(2)}</a><a>BGN</a>
            </div>
            <div className={classes.cartItemQuantitySec}>
                <button onClick={handleRemoveQauntity} className={classes.cntrQuantity}>
                    <i className="material-icons" style={{color: '#333', 'fontSize': '3rem', 'fontWeight': 'bold', 'backgroundColor': '#fcc419', 'borderRadius': '6px'}}>remove</i>
                </button>
                <p style={{fontWeight: 'bold', fontSize: '2rem'}} className={classes.cartItemQuantity}>{product.userQuantity}</p>
                <button onClick={handleAddQauntity} className={classes.cntrQuantity}>
                    <i className="material-icons" style={{color: '#333', 'fontSize': '3rem', 'fontWeight': 'bold', 'backgroundColor': '#fcc419', 'borderRadius': '6px'}}>add</i>
                </button>
            </div>
        </div>
    )
}