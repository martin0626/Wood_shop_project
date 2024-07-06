import { useDispatch } from "react-redux";
import { cartActions } from "./cart-slice";

export const updateCartLocalStorage = (items)=>{
    localStorage.setItem('items', JSON.stringify(items));
} 

export const getCartOnLoad = ()=>{
    const items = JSON.parse(localStorage.getItem('items'));
    const dispatch = useDispatch();

    items && dispatch(cartActions.replaceCart(items));
}

export const clearCartLocalStorage = ()=>{
    localStorage.setItem('items', JSON.stringify([]));
}