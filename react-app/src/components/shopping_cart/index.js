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
const user_id_num = Number(id)


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
            <div className="header-shop">
            <div><img className="cart-small-image"src={element.image2}/>{element.creator} </div>
            <div><p>Contact Shop</p></div>
          </div>

          <div className="image-price-container">
              <div className="image-desc-container">
            <img className="image-cart" src={element.image} alt={`Product ${index}`} style={{ width: '240px', height: '200px' }} />
            <div style={{width:"60%"}}><p>{element.title}</p> </div>
              </div>
            <div><h3>${element.price}</h3></div>
          </div>
         
         <div className="save-for-container">
          <div className="delete-remove-container">
            <i class="fa-solid fa-xmark" style={{fontSize:"22px"}} onClick={()=>handleDelete(element.id)}></i>
          <p>Remove</p>
          </div>
          <div><p className="save-words" onClick={()=>history.push(`/shopping_cart/${shopping_cart_id_num}/user/${user_id_num}`)}> Save for later</p></div>
          </div>

          <div className="footer-container">  
            <div> </div>
              <div><p>
                Estimated delivery: <span className="date">Oct 20-27 </span> 
                <br></br>
                from United Kingdom</p> </div>
          </div>

           </div>

         
        ))}
      </div>
        </>
    )
}

export default ShoppingCart