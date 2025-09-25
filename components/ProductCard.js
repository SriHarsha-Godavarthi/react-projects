import React from "react";

export default function ProductCard({product}){
    const {title,description,price,category,images}=product
return(<div className="product_container">
    <img className="product_image" src={images[0]}/>
    <div className="product_info">
        <h3 className="product_title">{title.slice(0,16)}</h3>
        <span className="product_description">{description.slice(0,24)} <b>...Read more</b></span>
        <span className="product_category">{category?.name}</span>
        <div className="add_cart_container">
            <h5 className="product_price">$ {price.toFixed(2)}</h5>
            <button className="add_cart">Add</button>
        </div>
    </div>
    </div>
)
}