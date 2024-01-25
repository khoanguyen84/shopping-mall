import React, { useContext, useState } from "react";
import { ShoppingContext } from "../../context/shopping-context";
import { setSearchStatus } from "../../reducer/actions";

const statusList = ["In stock", "On Sale"]
function Status() {
    const [collapse, setCollapse] = useState(false)
    const { dispatch } = useContext(ShoppingContext)
    return (
        <div className="accordion-item py-2 d-flex flex-column justify-content-center">
            <h5 className="accordion-header">
                <span role="button" className={`accordion-button ${collapse ? 'collapsed' : ''}`}
                    onClick={() => setCollapse(!collapse)}>
                    Product Status
                </span>
            </h5>
            {
                collapse && (
                    <div className="form-group">
                        {
                            statusList.map((status, index) => (
                                <div key={index} className="form-check">
                                    <input className="form-check-input" type="checkbox" value={status}
                                        onChange={(e) => dispatch(setSearchStatus(e.target.value))}
                                    />
                                    <label class="form-check-label">{status}</label>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Status;