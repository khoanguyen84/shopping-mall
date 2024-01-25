import React, { useContext, useState } from "react";
import { ShoppingContext } from "../../context/shopping-context";
import { setSearchPrice } from "../../reducer/actions";

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
        name: "$750-$1.000"
    },
    {
        value: '1000,1000',
        name: "Over $1.000"
    },

]
function Price() {
    const [collapse, setCollapse] = useState(false)
    const { dispatch, state } = useContext(ShoppingContext)
    const { filters: { price } } = state
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
                            prices.map((item, index) => (
                                <div key={item.value} className="form-check py-1">
                                    <input className="form-check-input" type="radio" name="price"
                                        id={`price_${index}`}
                                        value={item.value}
                                        defaultChecked={item.name === '0,0'}
                                        onChange={() => dispatch(setSearchPrice(item.value))}
                                    />
                                    <label
                                        role="button"
                                        htmlFor={`price_${index}`}
                                        className={`form-check-label ${item.value === price ? 'text-decoration-underline fw-bolder' : ''}`}
                                    >
                                        {item.name}
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