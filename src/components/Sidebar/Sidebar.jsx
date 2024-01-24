import React from "react";
import Category from './Category';
import Price from './Price';
import Brand from "../Brand/Brand";
import Status from "./Status";
function Sidebar() {
    return (
        <div className="d-flex flex-column">
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