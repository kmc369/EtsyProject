import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './Landing.css'
import * as ProductActions from '../../store/products'
import ProductDetails from "../productDetails";
import Footer from "../Footer";
function Landing () {
const dispatch = useDispatch()
const products = useSelector(state=>state.products.allProducts)
const sessionUser = useSelector(state=>state.session.user)
const history = useHistory()




const breakFour = (products)=>{
  console.log("values in breaking four", products)
  const groups = [];

  for(let i=0 ; i<products.length;i+=4){

   const segment= products.slice(i, i+4)
   console.log("eaach segment is",segment)
   groups.push(segment)
  }
  
  return groups

}





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
    <div className="welcom3-container">
      <div className="session-container">
        {sessionUser ? (
          <h3 className="landing-header">Welcome back, <u>{sessionUser.username}</u> </h3>
        ) : (
          <h3 className="landing-header">Hello Welcome to Fetsy</h3>
        )}
      </div>
    </div>
    <div className="magical-container">
      <div className="underth">Gifts Under $30 </div>
      <div className="magic">Magical, meaningful gifts!</div>
      <p className="part"> Participating shops only. Terms apply.</p>
    </div>

    <div className="circle-images">
      {/* Your image elements go here */}
    </div>
         
    <div className="center-container">
    <div className="landing-container">
  {breakFour(values).map((element, index) => (
    <div className="holding-item" key={index}> 
       <div className="because-container">
      <p>Because You viewed</p>
      <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf4UFLFtv4aUBTA925XFEFIpZdOwxlFmx4K2dJWKiIP4gy4S-je3UCsmt6INgfxZATOrE&usqp=CAU" style={{ width: '50px', height: '50px' }} /></div>
      </div>

      <div className="images-and-price">
      {element.map((segelement, index) => (
        <div key={index} className="product" id="products" onClick={() => { history.push(`/products/${segelement.id}`) }}>
          <img src={segelement.image} style={{ width: '200px', height: '200px' }} alt={`Product ${index + 1}`} />
          <div className="price">
            <i className="fa-solid fa-dollar-sign" style={{ color: "#000000", marginRight: "5px" }}></i>
            {segelement.price}
          </div>
        </div>
       
      ))}
       </div>
    </div>
  ))}
</div>
</div>








    <Footer />
  </>
);
}





export default Landing