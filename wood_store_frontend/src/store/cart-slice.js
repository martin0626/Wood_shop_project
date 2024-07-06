import { createSlice } from '@reduxjs/toolkit';
import { updateCartLocalStorage } from './cart-actions';


const getTotalPrice = (items)=>{
    let totalPrice = items.reduce((acc, p)=>{
        let result = Number(acc) + (p.userQuantity * p.price);
        return result.toFixed(2);
    }, 0)

    return totalPrice;
};

const getTotalQuantity = (items)=>{
    let totalQuantity = items.reduce((acc, p)=>{
        return acc + p.userQuantity;
    }, 0)

    return totalQuantity;
};



const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalPrice: 0,
    },
    reducers: {
        replaceCart(state, action){
            state.items = action.payload;
            state.totalQuantity = getTotalQuantity(action.payload);
            state.totalPrice = getTotalPrice(action.payload);
        },
        additemToCart(state, action){
            const product = action.payload;
            const productInCart = state.items.find(p => p.id === product.id);
        
            if(productInCart){
                let newQuantity = productInCart.userQuantity + product.userQuantity;
                productInCart.userQuantity = newQuantity > productInCart.quantity ? productInCart.quantity : newQuantity;
            }else{
               state.items.push(product);
            }

            state.totalQuantity = getTotalQuantity(state.items);
            state.totalPrice = getTotalPrice(state.items);
            updateCartLocalStorage(state.items);
        },
        removeItemFromCart(state, action){
            const productInCart = state.items.find(p => p.id === action.payload.id);
        
            if(productInCart.userQuantity === 1){
                state.items = state.items.filter(p=> p.id != action.payload.id);
            }else{
                productInCart.userQuantity -= 1;
            }

            state.totalQuantity = getTotalQuantity(state.items);
            state.totalPrice = getTotalPrice(state.items);
            updateCartLocalStorage(state.items);
        }
    }
})


export const cartActions = cartSlice.actions;
export default cartSlice;