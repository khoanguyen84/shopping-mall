import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        status: 'idle',
        data: [],
        totalRows: 0
    },
    reducers: {
        // action creator: name/case => products/fetchData
        // fetchData: (state, action) => {
        //     // console.log(action);
        //     // return [...action.payload]
        //     state = action.payload //mutation => Immer => immutation
        //     // IMMER
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataThunkAction.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchDataThunkAction.fulfilled, (state, action) => {
                state.data = action.payload?.products
                state.status = 'idle'
                state.totalRows = action.payload?.total
            })
            .addCase(fetchDataThunkAction.rejected, (state, action) => {

            })
    }
})

export const fetchDataThunkAction = createAsyncThunk('fetchDataThunkAction', async (limit) => {
    let productListRes = await fetch(`https://dummyjson.com/products?limit=${limit}`)
    let data = await productListRes.json();
    return data
})
// thực thi 1 ThunkAction
/*
    pending: chờ để lấy dữ liệu
    fulfilled: đã lấy dữ liệu thành công
    rejected: lỗi
 */

export default productsSlice;