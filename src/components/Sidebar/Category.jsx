import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchCategory } from "../../reducers/actions";
import { filtersSelector } from "../../reducers/selectors";

const categories = [
    { "value": 'All', "name": 'All' },
    { "value": "laptops", "name": "Laptops" },
    { "value": "fragrances", "name": "Fragrances" },
    { "value": "skincare", "name": "Skincare" },
    { "value": "groceries", "name": "Groceries" },
    { "value": "home-decoration", "name": "Home-decoration" },
    { "value": "furniture", "name": "Furniture" },
    { "value": "tops", "name": "Tops" },
    { "value": "womens-dresses", "name": "Womens-dresses" },
    { "value": "womens-shoes", "name": "Womens-shoes" },
    { "value": "mens-shirts", "name": "Mens-shirts" },
    { "value": "mens-shoes", "name": "Mens-shoes" },
    { "value": "mens-watches", "name": "Mens-watches" },
    { "value": "womens-watches", "name": "Womens-watches" },
    { "value": "womens-bags", "name": "Womens-bags" },
    { "value": "womens-jewellery", "name": "Womens-jewellery" },
    { "value": "sunglasses", "name": "Sunglasses" },
    { "value": "automotive", "name": "Automotive" },
    { "value": "motorcycle", "name": "Motorcycle" },
    { "value": "lighting", "name": "Lighting" }
]
function Category() {
    const [collapse, setCollapse] = useState(false)
    const dispatch = useDispatch()
    const { category } = useSelector(filtersSelector)
    return (
        <div className="accordion-item py-2 d-flex flex-column justify-content-center">
            <h5 className="accordion-header">
                <span role="button" className={`accordion-button ${collapse ? 'collapsed' : ''}`}
                    onClick={() => setCollapse(!collapse)}>
                    Category
                </span>

            </h5>
            {
                collapse && (
                    <div className="form-group">
                        {
                            categories.map((cat, index) => (
                                <div key={cat.value} className="form-check py-1">
                                    <input className="form-check-input" type="radio" name="category"
                                        id={`cat_${index}`}
                                        value={cat.value}
                                        defaultChecked={cat.value === 'All'}
                                        onChange={() => dispatch(setSearchCategory(cat.value))}
                                    />
                                    <label
                                        htmlFor={`cat_${index}`}
                                        role="button"
                                        className={`form-check-label ${cat.value === category ? 'text-decoration-underline fw-bolder' : ''}`}
                                    >
                                        {cat.name}
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

export default Category;