import { useDispatch, useSelector } from "react-redux";
import ModalComponent from "../UI/ModalComponent";
import classes from "./Cart.module.css"
import { uiActions } from "../../store/ui-slice";
import CartItem from "./CartItem";

export default function CartComponent(){

    const dispatch = useDispatch();
    const cartContent = useSelector((state)=> state.cart.items);
    const totalPrice = useSelector((state)=> state.cart.totalPrice);



    const onClose = ()=>{
        dispatch(uiActions.closeCart());
    }

    return (
        <ModalComponent onClose={onClose}>
            <div className={classes.cartHeader}>
                <h1>Cart</h1>
            </div>
            {
                cartContent.length &&
                <div className={classes.totalPrice}>
                    <a style={{fontWeight: 'bold'}}>Total: </a><a className={classes.priceNum}>{totalPrice}</a><a>BGN</a>
                </div>
            }
            <div className={classes.cartContainer}>
                <div className={classes.cartInfo}>
                    
                    {cartContent.length > 0 ? cartContent.map(p=> <CartItem product={p}/>) : <h1 style={{textAlign: "center"}}>No Products Yet</h1>}
                    
                </div>
                
            </div>
            <div className={classes.buttonCart}>
                    <button className="defaultBtn">Checkout</button>
                    <button className="defaultBtn" onClick={onClose}>Close</button>
                </div>
        </ModalComponent>
    )
}