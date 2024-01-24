import React from "react";
import MainLayout from "../layouts/MainLayout";

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
                    <div className="col-md-8">

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
                                            <img className="product-image" src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="" />
                                            <div className="d-inline">
                                                <div className="d-block fw-bolder mb-2">{"Nike Air Monarch IV"}</div>
                                                <div className="d-block">{"Black"}</div>
                                            </div>
                                        </div>

                                    </td>
                                    <td className="text-end">
                                        ${200}
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
                                        ${200}
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
                                            <img className="product-image" src="https://m.media-amazon.com/images/I/61bncQ44yML._AC_UX695_.jpg" alt="" />
                                            <div className="d-inline">
                                                <div className="d-block fw-bolder mb-2">{"Nike Air Monarch IV"}</div>
                                                <div className="d-block">{"Black"}</div>
                                            </div>
                                        </div>

                                    </td>
                                    <td className="text-end">
                                        ${200}
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
                                        ${200}
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
                                            <img className="product-image" src="https://m.media-amazon.com/images/I/71czu7WgGuL._AC_UY695_.jpg" alt="" />
                                            <div className="d-inline">
                                                <div className="d-block fw-bolder mb-2">{"Nike Air Monarch IV"}</div>
                                                <div className="d-block">{"Black"}</div>
                                            </div>
                                        </div>

                                    </td>
                                    <td className="text-end">
                                        ${200}
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
                                        ${200}
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
                                            <img className="product-image" src="https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg" alt="" />
                                            <div className="d-inline">
                                                <div className="d-block fw-bolder mb-2">{"Nike Air Monarch IV"}</div>
                                                <div className="d-block">{"Black"}</div>
                                            </div>
                                        </div>

                                    </td>
                                    <td className="text-end">
                                        ${200}
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
                                        ${200}
                                    </td>
                                    <td>
                                        <div className="action-wrap">
                                            <span className="btn-remove">&times;</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-4" style={{ minWidth: '300px' }}>
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