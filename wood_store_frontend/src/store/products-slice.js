import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        sort: false,
        filters: {},
    },
    reducers: {
        replaceProducts(state, action){
            state.products = action.payload.products
        },
        sort(state, actions){
            state.sort = actions.payload
        },
        clearSort(state){
            state.sort = false;
        }
    }
})


export const productsActions = productsSlice.actions;
export default productsSlice;