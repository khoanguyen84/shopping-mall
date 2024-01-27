const initState = {
    searchText: '',
    status: [],
    brand: 'All',
    category: 'All',
    price: '0,0'
}

const filtersSlice = (state = initState, action) => {
    switch (action.type) {
        case 'filters/searchText': {
            return {
                ...state,
                searchText: action.payload
            }
        }
        case 'filters/searchBrand': {
            return {
                ...state,
                brand: action.payload
            }
        }
        case 'filters/searchCategory': {
            return {
                ...state,
                category: action.payload
            }
        }
        case 'filters/searchPricet': {
            return {
                ...state,
                price: action.payload
            }
        }
        case 'filters/searchStatus': {
            let statusList = [...state.status]
            if (statusList.includes(action.payload)) {
                statusList = statusList.filter((item) => item !== action.payload)
            }
            else {
                statusList.push(action.payload)
            }
            return {
                ...state,
                status: statusList
            }
        }
        default: {
            return state
        }
    }
}
export default filtersSlice