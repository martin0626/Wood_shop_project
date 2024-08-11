import { createSlice } from "@reduxjs/toolkit";

const editableProductSlice = createSlice({
    name: 'products',
    initialState: {
        product: {},
        isEdited: false,
    },
    reducers: {
        setNewEdited(state, action){
            debugger
            state.product = action.payload
            state.isEdited = false
        },
        editProduct(state, actions){
            state.product = actions.payload;
            state.isEdited = true;
        }
    }
})


export const editActions = editableProductSlice.actions;
export default editableProductSlice;