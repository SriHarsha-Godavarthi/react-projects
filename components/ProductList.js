import React from "react";
import ProductCard from "./ProductCard";
import './productslist.css'
export default function ProductList({products=[]}){
    const [searchTerm,setSearchTerm]=React.useState('')
    const [filteredProducts,setFilteredProducts]=React.useState(products)
    const onProductSearch=(e)=>{
        e.stopPropagation();
        setFilteredProducts(products.filter(product=>product?.title?.toLowerCase().includes(searchTerm?.toLowerCase())))
    }   
    
    return(<div className="layout_container">
        <div className="search_container">
            <input  id="search" placeholder="Search For Product" className="input_ele" onChange={(e)=>{setSearchTerm(e?.target?.value)}} value={searchTerm}/>
            <button className="search_button" onClick={onProductSearch}><img width="32" height="32" src="https://img.icons8.com/dusk/64/search--v1.png" alt="search--v1"/></button>
        </div>
        <div className="main_container">
            <div className="products_list_container"> 
            {filteredProducts.map((product)=><ProductCard  key={product.id} product={product}/>)}
            </div>
        </div>
        </div>
    )


}