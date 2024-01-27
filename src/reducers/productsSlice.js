const initState = []

const productsSlice = (state = initState, action) => {
    switch (action.type) {
        case 'products/fetchData': {
            return [...action.payload]
        }
        default: {
            return state
        }
    }
}

export default productsSlice