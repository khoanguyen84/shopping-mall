import React, { useState } from "react";

const brandList = [
    { "value": 'All', "name": 'All Products' },
    { "value": "Apple", "name": "Apple" },
    { "value": "Samsung", "name": "Samsung" },
    { "value": "OPPO", "name": "OPPO" },
    { "value": "Huawei", "name": "Huawei" },
    { "value": "Microsoft Surface", "name": "Microsoft Surface" },
    { "value": "Infinix", "name": "Infinix" },
    { "value": "HP Pavilion", "name": "HP Pavilion" },
    { "value": "Impression of Acqua Di Gio", "name": "Impression of Acqua Di Gio" },
    { "value": "Royal_Mirage", "name": "Royal_Mirage" },
    { "value": "Fog Scent Xpressio", "name": "Fog Scent Xpressio" },
    { "value": "Al Munakh", "name": "Al Munakh" },
    { "value": "Lord - Al-Rehab", "name": "Lord - Al-Rehab" },
    { "value": "L'Oreal Paris", "name": "L'Oreal Paris" },
    { "value": "Hemani Tea", "name": "Hemani Tea" },
    { "value": "Dermive", "name": "Dermive" },
    { "value": "ROREC White Rice", "name": "ROREC White Rice" },
    { "value": "Fair & Clear", "name": "Fair & Clear" },
    { "value": "Saaf & Khaas", "name": "Saaf & Khaas" },
    { "value": "Bake Parlor Big", "name": "Bake Parlor Big" },
    { "value": "Baking Food Items", "name": "Baking Food Items" },
    { "value": "fauji", "name": "Fauji" },
    { "value": "Dry Rose", "name": "Dry Rose" },
    { "value": "Boho Decor", "name": "Boho Decor" },
    { "value": "Flying Wooden", "name": "Flying Wooden" },
    { "value": "LED Lights", "name": "LED Lights" },
    { "value": "luxury palace", "name": "Luxury palace" },
    { "value": "Golden", "name": "Golden" },
    { "value": "Furniture Bed Set", "name": "Furniture Bed Set" },
    { "value": "Ratttan Outdoor", "name": "Ratttan Outdoor" },
    { "value": "Kitchen Shelf", "name": "Kitchen Shelf" },
    { "value": "Multi Purpose", "name": "Multi Purpose" },
    { "value": "AmnaMart", "name": "AmnaMart" },
    { "value": "Professional Wear", "name": "Professional Wear" },
    { "value": "Soft Cotton", "name": "Soft Cotton" },
    { "value": "Top Sweater", "name": "Top Sweater" },
    { "value": "RED MICKY MOUSE..", "name": "RED MICKY MOUSE.." },
    { "value": "Digital Printed", "name": "Digital Printed" },
    { "value": "Ghazi Fabric", "name": "Ghazi Fabric" },
    { "value": "IELGY", "name": "IELGY" },
    { "value": "IELGY fashion", "name": "IELGY fashion" },
    { "value": "Synthetic Leather", "name": "Synthetic Leather" },
    { "value": "Sandals Flip Flops", "name": "Sandals Flip Flops" },
    { "value": "Maasai Sandals", "name": "Maasai Sandals" },
    { "value": "Arrivals Genuine", "name": "Arrivals Genuine" },
    { "value": "Vintage Apparel", "name": "Vintage Apparel" },
    { "value": "FREE FIRE", "name": "FREE FIRE" },
    { "value": "The Warehouse", "name": "The Warehouse" },
    { "value": "Sneakers", "name": "Sneakers" },
    { "value": "Rubber", "name": "Rubber" },
    { "value": "Naviforce", "name": "Naviforce" },
    { "value": "SKMEI 9117", "name": "SKMEI 9117" },
    { "value": "Strap Skeleton", "name": "Strap Skeleton" },
    { "value": "Stainless", "name": "Stainless" },
    { "value": "Eastern Watches", "name": "Eastern Watches" },
    { "value": "Luxury Digital", "name": "Luxury Digital" },
    { "value": "Watch Pearls", "name": "Watch Pearls" },
    { "value": "Bracelet", "name": "Bracelet" },
    { "value": "LouisWill", "name": "LouisWill" },
    { "value": "Copenhagen Luxe", "name": "Copenhagen Luxe" },
    { "value": "Steal Frame", "name": "Steal Frame" },
    { "value": "Darojay", "name": "Darojay" },
    { "value": "Fashion Jewellery", "name": "Fashion Jewellery" },
    { "value": "Cuff Butterfly", "name": "Cuff Butterfly" },
    { "value": "Designer Sun Glasses", "name": "Designer Sun Glasses" },
    { "value": "mastar watch", "name": "Mastar watch" },
    { "value": "Car Aux", "name": "Car Aux" },
    { "value": "W1209 DC12V", "name": "W1209 DC12V" },
    { "value": "TC Reusable", "name": "TC Reusable" },
    { "value": "Neon LED Light", "name": "Neon LED Light" },
    { "value": "METRO 70cc Motorcycle - MR70", "name": "METRO 70cc Motorcycle - MR70" },
    { "value": "BRAVE BULL", "name": "BRAVE BULL" },
    { "value": "shock absorber", "name": "Shock absorber" },
    { "value": "JIEPOLLY", "name": "JIEPOLLY" },
    { "value": "Xiangle", "name": "Xiangle" },
    { "value": "lightingbrilliance", "name": "Lightingbrilliance" },
    { "value": "Ifei Home", "name": "Ifei Home" },
    { "value": "DADAWU", "name": "DADAWU" },
    { "value": "YIOSI", "name": "YIOSI" }
]
function Brand() {
    const [collapse, setCollapse] = useState(false)
    return (
        <div className="accordion-item py-2 d-flex flex-column">
            <h5 className="accordion-header">
                <span role="button" className={`accordion-button ${collapse ? 'collapsed' : ''}`}
                    onClick={() => setCollapse(!collapse)}>
                    Brand
                </span>
            </h5>
            {
                collapse && (
                    <div className="form-group">
                        {
                            brandList.map(brand => (
                                <button key={brand.value}
                                    className={`btn btn-sm btn-outline-secondary me-1 mb-1 ${brand.value === 'All' ? 'active' : ''}`}
                                    type="button"
                                >
                                    {brand.name}
                                </button>
                            ))
                        }

                    </div>
                )
            }
        </div>
    )
}

export default Brand;