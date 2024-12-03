import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        item:[]
    },
    reducers: {
        addItem:(state, action) => {
            state.item.push(action.payload);
        },
        removeItem:(state, action) => {
            state.item.pop();
        },
        clearItem:(state, action) => {
            state.item = []; 
        }
    }
})

export const {addItem, removeItem, clearItem} = cartSlice.actions;
export default cartSlice.reducer;