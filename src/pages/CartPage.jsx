import React from "react";
import MainLayout from "../layouts/MainLayout";
import { priceAfterDiscount } from "../helper/helper";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function CartPage() {
    return (
        <MainLayout>
            <div className="container mt-1">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className=" py-2">Cart Detail</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-8">
                        <table className="table cart-table">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th className="text-end">Price</th>
                                    <th className="text-center">Quantity</th>
                                    <th className="text-end">Total</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ maxWidth: '200px' }}>
                                        <div className="d-flex align-items-center">
                                            <img className="product-image" src="https://cdn.dummyjson.com/product-images/1/3.jpg" alt="" />
                                            <div className="d-inline">
                                                <div className="d-block fw-bolder mb-2">{"iPhone 9".toLocaleUpperCase()}</div>
                                                <div className="d-block">{"Apple".toLocaleUpperCase()}</div>
                                            </div>
                                        </div>

                                    </td>
                                    <td className="text-end">
                                        ${priceAfterDiscount(200, 12.96)}
                                    </td>
                                    <td >
                                        <div className="cart-quantity-wrap">
                                            <div className="cart-quantity">
                                                <span>-</span>
                                                <span>1</span>
                                                <span>+</span>
                                            </div>
                                        </div>

                                    </td>
                                    <td className="text-end">
                                        ${priceAfterDiscount(200, 12.96)}
                                    </td>
                                    <td>
                                        <div className="action-wrap">
                                            <span className="btn-remove">&times;</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ maxWidth: '200px' }}>
                                        <div className="d-flex align-items-center">
                                            <img className="product-image" src="https://cdn.dummyjson.com/product-images/2/3.jpg" alt="" />
                                            <div className="d-inline">
                                                <div className="d-block fw-bolder mb-2">{"iPhone X".toLocaleUpperCase()}</div>
                                                <div className="d-block">{"Apple".toLocaleUpperCase()}</div>
                                            </div>
                                        </div>

                                    </td>
                                    <td className="text-end">
                                        ${priceAfterDiscount(200, 12.96)}
                                    </td>
                                    <td >
                                        <div className="cart-quantity-wrap">
                                            <div className="cart-quantity">
                                                <span>-</span>
                                                <span>1</span>
                                                <span>+</span>
                                            </div>
                                        </div>

                                    </td>
                                    <td className="text-end">
                                        ${priceAfterDiscount(200, 12.96)}
                                    </td>
                                    <td>
                                        <div className="action-wrap">
                                            <span className="btn-remove">&times;</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ maxWidth: '200px' }}>
                                        <div className="d-flex align-items-center">
                                            <img className="product-image" src="https://cdn.dummyjson.com/product-images/3/1.jpg" alt="" />
                                            <div className="d-inline">
                                                <div className="d-block fw-bolder mb-2">{"Samsung Universe 9".toLocaleUpperCase()}</div>
                                                <div className="d-block">{"Samsung".toLocaleUpperCase()}</div>
                                            </div>
                                        </div>

                                    </td>
                                    <td className="text-end">
                                        ${priceAfterDiscount(200, 12.96)}
                                    </td>
                                    <td >
                                        <div className="cart-quantity-wrap">
                                            <div className="cart-quantity">
                                                <span>-</span>
                                                <span>1</span>
                                                <span>+</span>
                                            </div>
                                        </div>

                                    </td>
                                    <td className="text-end">
                                        ${priceAfterDiscount(200, 12.96)}
                                    </td>
                                    <td>
                                        <div className="action-wrap">
                                            <span className="btn-remove">&times;</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="row col-md-12">
                            <Link to={'/product'}>
                                <FaArrowLeft /> Countinue shopping
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4" style={{ minWidth: '300px' }}>
                        <div className="order-summary p-3">
                            <h3 className="border-bottom py-2">Order Summary</h3>
                            <div className="d-flex flex-column">
                                <div className="d-flex align-items-center justify-content-between py-2">
                                    <span>Subtotal</span>
                                    <span className="fw-bolder">$418</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between py-2">
                                    <span>Shipping</span>
                                    <span className="fw-bolder">Free</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-top mt-2 py-2">
                                <span className="fs-6">Total</span>
                                <span className="fw-bolder fs-6">$418</span>
                            </div>
                        </div>
                        <div className="customer-info p-3">
                            <h3 className="border-bottom py-2">Customer Info</h3>
                            <div className="form-group mb-3">
                                <label className="form-label">Fullname</label>
                                <input type="text"
                                    className='form-control'
                                    placeholder="Fullname"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Address</label>
                                <input type="text"
                                    className='form-control'
                                    placeholder="Address"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Email</label>
                                <input type="text"
                                    className='form-control'
                                    placeholder="Email"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Mobile</label>
                                <input type="text"
                                    className='form-control'
                                    placeholder="Mobile"
                                />
                            </div>
                        </div>
                        <div className="py-3 bg-success mt-2 d-flex align-items-center justify-content-center text-white btn-checkout">
                            CHECKOUT
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default CartPage