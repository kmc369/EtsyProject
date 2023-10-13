import React, { useEffect, useState,ReactDOM, useReducer } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import * as SessionActions from '../../store/session'
import './shoppingcart.css'


function ShoppingCart (){
const [product,setProduct] = useState([])
const productsArr = useSelector(state=>state.session.user.shopping_cart.products)
const [cartPrice, setCartPrice]=useState(0)
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
  
    let totalPrice = 0;
    for(let i=0; i<product.length;i++){
      let price = product[i].price
    
      if (!isNaN(price)) {
        totalPrice = totalPrice+price;
      }
    }
   
    setCartPrice(totalPrice)
},[productsArr,product])

if(productsArr.length===0){
    return null
}

    return (
        <div className="cart-payment-container">
        <div className="center-container">
        <div className="cart-container" >
        {product.map((element, index) => (
         
          <div key={index}  id="cart-image-container">
            <div className="header-shop">
            <div className="image-creator"><img className="cart-small-image"src={element.image2}/>{element.creator} </div>
            <div><p className="save-words">Contact Shop</p></div>
          </div>

          <div className="image-price-container">
              <div className="image-desc-container">
            <img className="image-cart" src={element.image} alt={`Product ${index}`} style={{ width: '200px', height: '200px' }} />
            <div style={{width:"60%"}}><p>{element.title}</p> </div>
              </div>
            <div><h3>${element.price}</h3></div>
          </div>
         
         <div className="save-for-container">
          <div className="delete-remove-container">
            <i class="fa-solid fa-xmark"  style={{fontSize:"22px",cursor:"pointer"}} onClick={()=>handleDelete(element.id)}></i>
          <p onClick={()=>handleDelete(element.id)} style={{cursor:"pointer"}}>Remove</p>
          </div>
          <div><p className="save-words" style={{cursor:"pointer"}} onClick={()=>history.push(`/shopping_cart/${shopping_cart_id_num}/user/${user_id_num}`)}> Save for later</p></div>
          </div>

          <div className="footer-container-cart">  
            <div> </div>
              <div><p>
                Estimated delivery: <span className="date">Oct 20-27 </span> 
                <br></br>
                from United Kingdom</p> </div>
          </div>

           </div>

         
        ))}

        

        </div>
        <div className="card-infomration-container">
         
          <h3 className="pay-header">How you'll pay</h3>
            <div className="Master-cards">
            <input
             name="paymentMethod"
            type="radio"
            style={{ width: '23px', height: '23px',marginRight:"2px" }}
            />
            <i class="fa-brands fa-cc-visa" style={{color: "#e60000",fontSize:"40px"}}></i>
            <i class="fa-brands fa-cc-mastercard" style={{color: "#f07e14",fontSize:"40px"}}></i>
            <i class="fa-brands fa-cc-amex" style={{color: "#bb9d07",fontSize:"40px"}}></i>
            <i class="fa-brands fa-cc-discover" style={{color: "#f37712", fontSize:"40px"}}></i>
            </div>

            <div className="paypal">
            <input
             name="paymentMethod"
            type="radio"
            style={{ width: '23px', height: '23px',marginRight:"2px" }}
            />
            <i class="fa-brands fa-cc-paypal" style={{color: "#2b72ee", fontSize:"40px"}}></i>
           
           
            </div>

            <div className="google-pay">
            <input
             name="paymentMethod"
            type="radio"
            style={{ width: '23px', height: '23px',marginRight:"2px" }}
            />
          
            <i class="fa-brands fa-google-pay" style={{color: "#f83f3f" ,fontSize:"40px"}}></i>
           
            </div>

            <div className="apple-pay">
            <input
             name="paymentMethod"
            type="radio"
            style={{ width: '23px', height: '23px',marginRight:"2px" }}
            />
          
          <i class="fa-brands fa-cc-apple-pay" style={{color: "#000000",fontSize:"40px"}}></i>
           
            </div>
          
          <div className="item-price-checkout">
            <p className="item-words">Item(s) total</p>
            <p className="save-words">${cartPrice}</p>
        </div>

        <div className="early-discount">
            <p className="item-words">Shop discount</p>
            <p className="save-words">$5.00</p>
        </div>

        <div className="sub-total">
            <p className="item-words">Subtotal</p>
            <p className="save-words">${cartPrice-5.00}</p>
        </div>

        <button className="checkout" onClick={()=>{window.alert("This feature isnt available as this is not a real site")}}>Proceed to checkout</button>
            
      </div>
      </div>
      </div>
    )
}

export default ShoppingCart