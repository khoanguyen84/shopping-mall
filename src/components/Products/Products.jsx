import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import productsSlice, { fetchDataThunkAction } from "../../redux-toolkit/productsSlice";
import { filteredProductsSelector } from "../../store/selectors";
import InfiniteScroll from "react-infinite-scroll-component";

var limit = 8
function Products() {
    const dispatch = useDispatch()
    const filteredProducts = useSelector(filteredProductsSelector)
    const totalRows = useSelector(state => state.products?.totalRows)
    useEffect(() => {
        // async function getProductList(){
        //     let productListRes = await fetch('https://dummyjson.com/products?limit=100')
        //     let data = await productListRes.json();
        //     dispatch(productsSlice.actions.fetchData(data?.products))
        // }
        // getProductList()
        dispatch(fetchDataThunkAction(limit))
    }, [])

    const loadMore = () => {
        limit += 8
        dispatch(fetchDataThunkAction(limit))
    }
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5>Products</h5>
            <InfiniteScroll
                dataLength={filteredProducts.length}
                hasMore={limit < totalRows}
                loader={<p>Loading</p>}
                next={loadMore}
                style={{ overflow: 'hidden' }}
                endMessage={<p>You have seen it all!</p>}
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