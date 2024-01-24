import React, { useState } from "react";

const prices = [
    {
        value: '0,0',
        name: "All"
    },
    {
        value: '0,50',
        name: "$0-$50"
    },
    {
        value: '50,150',
        name: "$50-$150"
    },
    {
        value: '150,300',
        name: "$150-$300"
    },
    {
        value: '300,500',
        name: "$300-$500"
    },
    {
        value: '500,750',
        name: "$500-$750"
    },
    {
        value: '750,1000',
        name: "$750-$1000"
    },
    {
        value: '1000,1000',
        name: "Over $1000"
    },

]
function Price() {
    const [collapse, setCollapse] = useState(false)
    return (
        <div className="accordion-item  py-2 d-flex flex-column justify-content-center">
            <h5 className="accordion-header">
                <span role="button" className={`accordion-button ${collapse ? 'collapsed' : ''}`}
                    onClick={() => setCollapse(!collapse)}>
                    Filter by price
                </span>
            </h5>
            {
                collapse && (
                    <div className="form-group">
                        {
                            prices.map((price, index) => (
                                <div key={price} className="form-check py-1">
                                    <input className="form-check-input" type="radio" name="price"
                                        id={`price_${index}`}
                                        value={price.value}
                                        defaultChecked={price.name === 'All'}
                                    />
                                    <label
                                        role="button"
                                        htmlFor={`price_${index}`}
                                        className={`form-check-label ${price.name === 'All' ? 'text-decoration-underline fw-bolder' : ''}`}
                                    >
                                        {price.name}
                                    </label>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Price;