import { createSlice } from '@reduxjs/toolkit';


const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        cartIsOpen: false,
        isLoading: false,
    },
    reducers: {
        openCart(state){
            state.cartIsOpen = true;
        },
        closeCart(state){
            state.cartIsOpen = false;
        },
        setLoading(state){
            state.isLoading = true;
        },
        setLoaded(state){
            state.isLoading = false;
        }
    }
})


export const uiActions = uiSlice.actions;
export default uiSlice;