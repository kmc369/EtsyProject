import React, { useEffect, useState,ReactDOM, useReducer } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import * as SessionActions from '../../store/session'
import './shoppingcart.css'


function ShoppingCart (){
const [product,setProduct] = useState([])
const products = useSelector(state=>state.session.user.shopping_cart.products)
const history = useHistory()
const dispatch = useDispatch()
const {shopping_cart_id, id} = useParams()

const shopping_cart_id_num = Number(shopping_cart_id)



const handleDelete= async(product_id) =>{
  
   await  dispatch(SessionActions.deleteFromCartThunk(product_id,shopping_cart_id_num))
}

    return (
        <>
        <div>Shopping Cart</div>
        <div className="cart-container" >
        {products.map((element, index) => (
          <div key={index}  id="products">
            <img src={element.image1} alt={`Product ${index}`} style={{ width: '200px', height: '200px' }} />
            <div className="price">
            <i class="fa-solid fa-dollar-sign"  style={{color: "#000000",marginRight:"5px"}}></i>
            {element.price}
            </div>
            <button className="deletefromcart" onClick={()=>handleDelete(element.id)}>Delete</button>
           </div>
        ))}
      </div>
        </>
    )
}

export default ShoppingCart