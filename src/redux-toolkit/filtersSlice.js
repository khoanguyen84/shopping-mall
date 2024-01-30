import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        searchText: '',
        brand: 'All',
        category: 'All',
        status: [],
        price: '0,0'
    },
    reducers: {
        setSearchText: (state, action) => {
            state.searchText = action.payload
        },
        setSearchBrand: (state, action)  => {
            state.brand = action.payload
        },
        setSearchCategory: (state, action) => {
            state.category = action.payload
        },
        setSearchPrice: (state, action) => {
            state.price = action.payload
        },
        setSearchStatus: (state, action) => {
            if(state.status.includes(action.payload)) {
                state.status = state.status.filter((item) => item !== action.payload)
            }
            else {
                state.status.push(action.payload)
            }
        }
    }
})

export default filtersSlice;