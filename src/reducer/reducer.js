export const initState = {
    filters: {
        searchText: '',
        status: [],
        brand: 'All',
        category: 'All',
        price: '0,0'
    },
    products: []
}

export default function reducer(state, action) {
    switch (action.type) {
        case 'products/fetchData': {
            return {
                ...state,
                products: action.payload
            }
        }
        case 'filters/searchText': {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    searchText: action.payload
                }
            }
        }
        case 'filters/searchBrand': {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    brand: action.payload
                }
            }
        }
        case 'filters/searchCategory': {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    category: action.payload
                }
            }
        }
        case 'filters/searchPrice': {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    price: action.payload
                }
            }
        }
        case 'filters/searchStatus': {
            let statusList = [...state.filters.status]
            if (statusList.includes(action.payload)) {
                statusList = statusList.filter((item) => item !== action.payload)
            }
            else {
                statusList.push(action.payload)
            }
            return {
                ...state,
                filters: {
                    ...state.filters,
                    status: statusList
                }
            }
        }
        default: {
            return state
        }
    }
}