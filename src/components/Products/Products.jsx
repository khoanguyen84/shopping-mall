import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../reducers/actions";
import { priceAfterDiscount } from "../../helper/helper";
import { filteredProductsSelector, filtersSelector, productsSeletor } from "../../reducers/selectors";
import InfiniteScroll from "react-infinite-scroll-component";

var limit = 8
var totalRows = 0
function Products() {
    const dispatch = useDispatch()
    // const products = useSelector(productsSeletor)
    // const { searchText, brand, category, status, price } = useSelector(filtersSelector)
    useEffect(() => {
        async function getProductList() {
            let productListRes = await fetch('https://dummyjson.com/products?limit=8')
            let data = await productListRes.json()
            totalRows = data?.total
            dispatch(fetchData(data?.products))
        }
        getProductList()
    }, [])
    const filteredProducts = useSelector(filteredProductsSelector)

    // function queryProducts() {
    //     let filteredProducts = [...products]
    //     if (searchText) {
    //         filteredProducts = filteredProducts.filter((p) => p?.title.toLowerCase().includes(searchText.toLowerCase()))
    //     }
    //     if (brand !== 'All') {
    //         filteredProducts = filteredProducts.filter(p => p?.brand === brand)
    //     }
    //     if (category !== 'All') {
    //         filteredProducts = filteredProducts.filter(p => p?.category === category)
    //     }
    //     if (price != '0,0') {
    //         const [min, max] = price.split(",")
    //         if (min !== max) {
    //             filteredProducts = filteredProducts.filter((p) => {
    //                 let newPrice = priceAfterDiscount(p?.price, p?.discountPercentage)
    //                 return newPrice >= min && newPrice < max
    //             })
    //         }
    //         else {
    //             filteredProducts = filteredProducts.filter((p) => {
    //                 let newPrice = priceAfterDiscount(p?.price, p?.discountPercentage)
    //                 return newPrice >= min
    //             })
    //         }
    //     }
    //     if (status.length) {
    //         if (status.includes('On sale')) {
    //             filteredProducts = filteredProducts.filter(p => p?.discountPercentage > 0)
    //         }
    //         if (status.includes('In stock')) {
    //             filteredProducts = filteredProducts.filter(p => p?.stock > 0)
    //         }
    //     }
    //     return filteredProducts
    // }
    // const filteredProducts = queryProducts();

    const loadMoreData = async () => {
        if (limit < totalRows) {
            limit = limit + 8
            let productListRes = await fetch(`https://dummyjson.com/products?limit=${limit}`)
            let data = await productListRes.json()
            dispatch(fetchData(data?.products))
        }

    }
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5>Products</h5>
            <InfiniteScroll
                dataLength={filteredProducts.length}
                next={loadMoreData}
                hasMore={limit < totalRows}
                loader={<p>Loading...</p>}
                endMessage = {<p>You have seen it all!</p>}
                style={{overflow: 'hidden'}}
                pullDownToRefreshThreshold={'100px'}
            >
                <div className="row">
                    {
                        filteredProducts?.map((product) => (
                            <Product key={product.id} product={product} />
                        ))
                    }
                </div>
            </InfiniteScroll>
        </div>
    )
}

export default Products;