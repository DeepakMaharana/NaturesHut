import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchFilter:null,
        searchParameter:null
    },
    reducers: {
        updateSearchParameter:(state, action) => {
            searchParameter = action.payload;
        },
        updateSerachFilter:(state, action) => {
            searchFilter = action.payload;
        }
    }
})

export const {updateSearchParameter, updateSerachFilter} = searchSlice.actions;
export default searchSlice.reducer;