import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './Landing.css'
import * as ProductActions from '../../store/products'


function Landing () {
const dispatch = useDispatch()
const products = useSelector(state=>state.products.allProducts)
const sessionUser = useSelector(state=>state.session.user)
const history = useHistory()




useEffect(()=>{
    const products = async() =>{
        await dispatch(ProductActions.getAllProductThunk())
    }
    products()
},[dispatch])

if(Object.values(products).length===0){
    return null
}
const values = Object.values(products)

return (
    <>  
    <div className="magical-container">
      <div className="session-container">
    {sessionUser? (
        <h3 className="landing-header">Welcome back, <u>{sessionUser.username}</u> </h3>
    ):(
        <h3 className="landing-header">Hello Welcome to Fetsy</h3>
    )}
    </div>
    </div> 
      <div className="landing-container" >
        {values.map((element, index) => (
          <div key={index} className="product" id="products" onClick={()=>{history.push(`/products/${element.id}`)}}>
            <img src={element.image1} alt={`Product ${index}`} style={{ width: '250px', height: '250px' }} />
            <div className="price">
            <i class="fa-solid fa-dollar-sign"  style={{color: "#000000",marginRight:"5px"}}></i>
            {element.price}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}





export default Landing