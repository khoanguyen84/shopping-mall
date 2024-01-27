import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchStatus } from "../../reducers/actions";

const statusList = ["In stock", "On Sale"]
function Status() {
    const [collapse, setCollapse] = useState(false)
    const dispatch = useDispatch()
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
                                    <input class="form-check-input" type="checkbox" value={status} 
                                        onChange={() => dispatch(setSearchStatus(status))}
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