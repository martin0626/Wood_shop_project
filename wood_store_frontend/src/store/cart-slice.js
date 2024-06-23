import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        replaceCart(state, action){
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
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

            state.totalQuantity = state.items.reduce((acc, p)=>{
                return acc + p.userQuantity;
            }, 0)
        },
        removeItemFromCart(state, action){
            const productInCart = state.items.find(p => p.id === action.payload.id);
        
            if(productInCart.userQuantity === 1){
                state.items = state.items.filter(p=> p.id != action.payload.id);
            }else{
                productInCart.userQuantity -= 1;
            }

            state.totalQuantity = state.items.reduce((acc, p)=>{
                return acc + p.userQuantity;
            }, 0)
        }
    }
})


export const cartActions = cartSlice.actions;
export default cartSlice;