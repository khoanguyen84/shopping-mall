import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Products from "../components/Products/Products";
import MainLayout from "../layouts/MainLayout";

function ShoePage() {
    return (
        <MainLayout>
            <div className='container'>
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-2">
                        <Sidebar />
                    </div>
                    <div className='col-sm-12 col-md-8 col-lg-10'>
                        <Products />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default ShoePage