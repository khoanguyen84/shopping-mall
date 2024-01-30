import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../redux-toolkit/productsSlice";
import filtersSlice from "../redux-toolkit/filtersSlice";

const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        filters: filtersSlice.reducer
    }
})

export default store;