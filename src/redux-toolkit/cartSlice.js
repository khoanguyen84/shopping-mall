// thông tin giỏ
/*
    danh sách các sản phẩm
        + số lượng (quantity)
        + số tiền (amount)
    tổng tiền (total) = shipping fee + subtotal
        shipping (shipping fee)
        tổng tiền chưa có phí ship (subtotal)
        ngày mua (orderDate)
    thông tin người mua (customer info)
        họ và tên (fullname)
        địa chỉ (address)
        thư điện tử (email)
        số điện thoại (mobile)
 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartId: uuid(),
        cartInfo: {
            subtotal: 0,
            shipping: 0,
            total: 0,
            orderDate: new Date().valueOf()
        },
        cartDetails: [],
        customerInfo: {
            fullname: '',
            address: '',
            email: '',
            mobile: ''
        }
    },
    reducers: {
        addToCart: (state, action) => {
            /*
                TH1: sản phẩn đó chưa có trong giỏ
                    - thêm thuộc tính quantity = 1
                    - tính amount = quantity * price
                TH2: sản phẩm đã có trong giỏ hàng
                    - Tăng số lượng (quantity) lên 1 đơn vị
                    - tính amount
                tính lại subtotal
                tính lại total
             */
            let cartItem = state.cartDetails.find((item) => item.id === action.payload.id)
            //sản phẩm đã có trong giỏ hàng
            if (cartItem?.id) {
                cartItem.quantity = Number(cartItem.quantity) + 1
                cartItem.amount = Number(cartItem.quantity) * Number(cartItem.newPrice)
            }
            else {
                console.log({
                    ...action.payload,
                    quantity: 1,
                    amount: action.payload.newPrice
                });
                state.cartDetails.push({
                    ...action.payload,
                    quantity: 1,
                    amount: action.payload.newPrice
                })
            }
            let newSubtotal = 0
            for (let item of state.cartDetails) {
                newSubtotal += Number(item.amount)
            }
            let newTotal = newSubtotal + Number(state.cartInfo.shipping)
            state.cartInfo.subtotal = newSubtotal;
            state.cartInfo.total = newTotal
        },
        incrementQuantity: (state, action) => {
            let cartItem = state.cartDetails.find((item) => item.id === action.payload)
            cartItem.quantity = Number(cartItem.quantity) + 1
            cartItem.amount = Number(cartItem.quantity) * Number(cartItem.newPrice)

            let newSubtotal = 0
            for (let item of state.cartDetails) {
                newSubtotal += Number(item.amount)
            }
            let newTotal = newSubtotal + Number(state.cartInfo.shipping)
            state.cartInfo.subtotal = newSubtotal;
            state.cartInfo.total = newTotal
        },
        descrementQuantity: (state, action) => {
            let cartItem = state.cartDetails.find((item) => item.id === action.payload)
            cartItem.quantity = Number(cartItem.quantity) - 1
            cartItem.amount = Number(cartItem.quantity) * Number(cartItem.newPrice)

            let newSubtotal = 0
            for (let item of state.cartDetails) {
                newSubtotal += Number(item.amount)
            }
            let newTotal = newSubtotal + Number(state.cartInfo.shipping)
            state.cartInfo.subtotal = newSubtotal;
            state.cartInfo.total = newTotal
        },
        removeCartItem: (state, action) => {
            state.cartDetails = state.cartDetails.filter((item) => item.id !== action.payload)
            let newSubtotal = 0
            for (let item of state.cartDetails) {
                newSubtotal += Number(item.amount)
            }
            let newTotal = newSubtotal + Number(state.cartInfo.shipping)
            state.cartInfo.subtotal = newSubtotal;
            state.cartInfo.total = newTotal
        },
        // createCustomerInfo: (state, action) => {
        //     state.customerInfo = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(checkoutThunkAction.pending, (state, action) => {

            })
            .addCase(checkoutThunkAction.fulfilled, (state, action) => {
                state.cartId = uuid();
                state.cartInfo = {
                    subtotal: 0,
                    shipping: 0,
                    total: 0,
                    orderDate: new Date().valueOf()
                };
                state.cartDetails = []
                state.customerInfo = {
                    fullname: '',
                    address: '',
                    email: '',
                    mobile: ''
                }
            })
    }
})

export const checkoutThunkAction = createAsyncThunk('cart/checkout', async (data) => {
    let checkoutRes = await fetch('https://student-app-api.vercel.app/orderList', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    let result = await checkoutRes.json()
    console.log(result);
    return result
})

export default cartSlice;