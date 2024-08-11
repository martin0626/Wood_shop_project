import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart-slice';
import uiSlice from './ui-slice';
import productsSlice from './products-slice';
import filterSlice from './filter-slice';
import editableProductSlice from './editProduct-slice';


const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        products: productsSlice.reducer,
        ui: uiSlice.reducer,
        filter: filterSlice.reducer,
        editableProduct: editableProductSlice.reducer
    }
})


export default store;