import React from "react";
import { FaCartArrowDown, FaStar, FaStarHalf } from "react-icons/fa";

function Product({product}) {
    return (
        <div className="col-md-3 mb-4">
            <div className="card d-flex align-items-center pt-4">
                <img src={'https://cdn.dummyjson.com/product-images/2/1.jpg'} 
                    className="card-image-top" alt="" 
                    style={{width: "90%"}}
                />
                <div className="w-100 px-4 py-3">
                    <p className="fw-bolder text-center">{'Apple'.toLocaleUpperCase()} - {'iPhone X'.toLocaleUpperCase()}</p>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <div className="me-1">
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                            <FaStarHalf color="orange" />
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <div className="fs-10 badge bg-success">
                            {34} In stock
                        </div>
                        <div className="fs-10 badge bg-danger">
                            {'On sale'}
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                         <div>
                            <del className="line-through me-2">${899}</del>
                            <span className="fs-4 text-danger fw-bolder">${Math.floor((899*(1-Number(17.94)*0.01)))}</span>
                        </div>   
                        <FaCartArrowDown size={20} className="btn-cart"/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product;