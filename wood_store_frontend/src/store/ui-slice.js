import { createSlice } from '@reduxjs/toolkit';

const notificationDefault = {
    type: 'single',
    message: '',
    header: ''
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        cartIsOpen: false,
        isLoading: false,
        hasNotification: false,
        notification: notificationDefault
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
        },
        setErrNotification(state, action){
            state.hasNotification = true;
            state.notification = {...action.payload, type: 'error'};
        },
        setGreenNotification(state, action){
            state.hasNotification = true;
            state.notification = {...action.payload, type: 'green'};
        },
        setSingleNotification(state, action){
            state.hasNotification = true;
            state.notification = {...action.payload, type: 'single'};
        },
        removeNotification(state){
            state.hasNotification = false;
            state.notification = notificationDefault;
        }
    }
})


export const uiActions = uiSlice.actions;
export default uiSlice;