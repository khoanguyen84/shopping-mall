import React from "react";
import Category from './Category';
import Price from './Price';
import Brand from "./Brand";
import Status from "./Status";
function Sidebar() {
    return (
        <div className="d-flex flex-column vh-100">
            <div className="accordion accordion-flush">
                <Status/>
                <Brand />
                <Category />
                <Price />
            </div>
        </div>
    )
}

export default Sidebar;