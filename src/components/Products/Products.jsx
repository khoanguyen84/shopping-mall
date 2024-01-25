import React, { useContext, useEffect } from "react";
import Product from "./Product";
import { ShoppingContext } from "../../context/shopping-context";
import { fetchData } from "../../reducer/actions";
import { priceAfterDiscount } from "../../helper/helper";

function Products() {
    const { state, dispatch } = useContext(ShoppingContext)
    const { products, filters: { searchText, brand, category, price, status } } = state
    useEffect(() => {
        async function getProductList() {
            let productRes = await fetch('https://dummyjson.com/products?limit=100')
            let data = await productRes.json();
            dispatch(fetchData(data?.products))
        }
        getProductList()
    }, [])

    function queryProducts() {
        let filteredProducts = [...products]
        if (searchText) {
            filteredProducts = filteredProducts.filter((p) => p?.title.toLowerCase().includes(searchText.toLowerCase()))
        }
        if (brand !== 'All') {
            filteredProducts = filteredProducts.filter(p => p?.brand === brand)
        }
        if (category !== 'All') {
            filteredProducts = filteredProducts.filter(p => p?.category === category)
        }
        if (price != '0,0') {
            const [min, max] = price.split(",")
            if (min !== max) {
                filteredProducts = filteredProducts.filter((p) => {
                    let newPrice = priceAfterDiscount(p?.price, p?.discountPercentage)
                    return newPrice >= min && newPrice < max
                })
            }
            else {
                filteredProducts = filteredProducts.filter((p) => {
                    let newPrice = priceAfterDiscount(p?.price, p?.discountPercentage)
                    return newPrice >= min
                })
            }
        }
        if (status.length) {
            if(status.includes('On sale')){
                filteredProducts = filteredProducts.filter(p => p?.discountPercentage > 0)
            }
            if(status.includes('In stock')){
                filteredProducts = filteredProducts.filter(p => p?.stock > 0)
            }
        }
        return filteredProducts
    }

    const filteredProducts = queryProducts();

    console.log(state.filters.status);
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5>Products</h5>
            <div className="row">
                {
                    filteredProducts?.map((product) => (
                        <Product key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products;