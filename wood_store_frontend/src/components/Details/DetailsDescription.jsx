import { useState } from 'react';
import classes from './DetailsDescription.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

export default function DetailsDescription({product}){
    const [userQuantity, setUserQuantity] = useState(1);
    const dispatch = useDispatch();
    const cart = useSelector((state)=> state.cart.items)



    const handleAddTocart = ()=>{
        dispatch(cartActions.additemToCart({...product, userQuantity}))
    }

    const handleAddQuantity = ()=>{
        product.quantity > userQuantity && setUserQuantity(userQuantity + 1);
    };

    const handleRemoveQuantity = ()=>{
        userQuantity > 1 && setUserQuantity(userQuantity - 1);
    }



    return(
        <div className={classes.description}>
            <h1 className={classes.mainDescriptionText}>{product.name}</h1>
            <div className={classes.detailsPrice}>
                <a>Price: </a><a className={classes.mainDescriptionText}>{product.price}</a><a style={{color: '#fff'}}>BGN</a>
            </div>
            <div className={classes.detailsSize}>
                <a>Size: </a>
                <a className={classes.mainDescriptionText}>{product.width} X {product.height}</a>
                {/* <p>{product.width} X {product.height}</p> */}
            </div>
            <div className={classes.detailsSize}>
                <a>Weight: </a>
                <a className={classes.mainDescriptionText}>{product.weight}</a> <a style={{color: '#fff'}}>KG</a>
                {/* <p>{product.width} X {product.height}</p> */}
            </div>
            
            <div className={classes.detailQuantity}>
                <a>Quantity:</a> 

                <button onClick={handleRemoveQuantity} className={classes.detailQuantity}><i className="material-icons" style={
                    {color: '#333', 'fontSize': '3rem', 'fontWeight': 'bold', 'backgroundColor': '#fcc419', 'borderRadius': '6px'}}>remove</i>
                </button>
                <p className={classes.mainDescriptionText}>{userQuantity}</p>
                <button onClick={handleAddQuantity} className={classes.detailQuantity}>
                    <i className="material-icons" style={{color: '#333', 'fontSize': '3rem', 'fontWeight': 'bold', 'backgroundColor': '#fcc419', 'borderRadius': '6px'}}>add</i>
                </button>
            </div>
            <div className={classes.detailsBtnGr}>
                <button onClick={handleAddTocart}>Add to cart</button>
            </div>
        </div>
    )
}