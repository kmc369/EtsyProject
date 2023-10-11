import React, { useEffect, useState,ReactDOM, useReducer } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import * as SessionActions from '../../store/session'
import './shoppingcart.css'


function ShoppingCart (){
const [product,setProduct] = useState([])
const productsArr = useSelector(state=>state.session.user.shopping_cart.products)
console.log("the product array is ", productsArr)
const history = useHistory()
const dispatch = useDispatch()
const {shopping_cart_id, id} = useParams()

const shopping_cart_id_num = Number(shopping_cart_id)



const handleDelete= async(product_id) =>{
  
   await  dispatch(SessionActions.deleteFromCartThunk(product_id,shopping_cart_id_num))
   setProduct(productsArr)

}
useEffect(()=>{
    setProduct(productsArr)
},[productsArr])

if(productsArr.length===0){
    return null
}

    return (
        <>
        <div>Shopping Cart</div>
        <div className="cart-container" >
        {product.map((element, index) => (
          <div key={index}  id="cart-image-container">
            <div><img className="cart-small-image"src={element.image2}/>{element.creator} </div>
            <img src={element.image} alt={`Product ${index}`} style={{ width: '240px', height: '200px' }} />
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