import React, { useEffect, useState,ReactDOM } from "react";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import './shoppingcart.css'


function ShoppingCart (){
const [product,setProduct] = useState([])
const products = useSelector(state=>state.session.user.shopping_cart.products)
const history = useHistory()


    return (
        <>
        <div>Shopping Cart</div>
        <div className="landing-container" >
        {products.map((element, index) => (
          <div key={index} className="product" id="products" onClick={()=>{history.push(`/products/${element.id}`)}}>
            <img src={element.image1} alt={`Product ${index}`} style={{ width: '200px', height: '200px' }} />
            <div className="price">
            <i class="fa-solid fa-dollar-sign"  style={{color: "#000000",marginRight:"5px"}}></i>
            {element.price}
            </div>
           </div>
        ))}
      </div>
        </>
    )
}

export default ShoppingCart