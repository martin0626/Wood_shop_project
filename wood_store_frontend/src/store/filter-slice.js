import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    category: "ALL",
    price: "10000",
    materials: [],
}

const filterSlice = createSlice({
    name: 'products',
    initialState: {
        filter: initialState,
    },
    reducers: {
        setFilter(state, action){
            let newFilter = action.payload;
            newFilter = newFilter.materials ? newFilter : {...newFilter, materials: []}; 
            
            state.filter = newFilter;

        },
        resetFilter(state){
            state.filter = initialState;
        }
    }
})


export const filterActions = filterSlice.actions;
export default filterSlice;