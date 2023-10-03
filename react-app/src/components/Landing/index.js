import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import './Landing.css'
import * as ProductActions from '../../store/products'


function Landing () {
const dispatch = useDispatch()
const products = useSelector(state=>state.products.allProducts)
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
        <h1>return Landing</h1>
      <div className="landing-container">
        {values.map((element, index) => (
          <div key={index} className="product" id="products">
            <img src={element.image1} alt={`Product ${index}`} style={{ width: '300px', height: '300px' }} />
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