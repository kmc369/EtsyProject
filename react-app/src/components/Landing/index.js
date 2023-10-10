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
    {sessionUser? (
        <h3 className="landing-header">Welcome back, <u>{sessionUser.username}</u> </h3>

    ):(
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
      <img src="https://i.etsystatic.com/30981785/r/il/393034/4645837193/il_794xN.4645837193_qkwb.jpg" style={{width:"130px",height:"130px"}}/>
      <img src="https://i.etsystatic.com/17305851/r/il/319e0d/4796740674/il_794xN.4796740674_mypt.jpg" style={{width:"130px",height:"130px"}}/>
      <img src="https://i.etsystatic.com/11753776/r/il/51dcbb/1975020708/il_794xN.1975020708_1t4i.jpg" style={{width:"130px",height:"130px"}}/>
      <img src="https://i.etsystatic.com/32516685/r/il/2f2f23/4963062963/il_794xN.4963062963_aisj.jpg" style={{width:"130px",height:"130px"}}/>
      <img src="https://i.etsystatic.com/25199519/r/il/3df845/4968305885/il_794xN.4968305885_l8pb.jpg" style={{width:"130px",height:"130px"}}/>

    </div >

      <div className="entire-landing-container">
      <div className="because-image-container">
    <div className="because-container">
    <p>Because You viewed</p>
      <div><img src={values[0].image1} style={{ width: '50px', height: '50px', borderRadius:"5px" }} /></div>
      </div>
     <div className="landing-container" >
      
    
        {values.slice(0,4).map((element, index) => (
         
          <div key={index} className="product" id="products" onClick={()=>{history.push(`/products/${element.id}`)}}>
              
           
            <img src={element.image} alt={`Product ${index}`} style={{ width: '200px', height: '200px' }} />
            <div className="price">
            <i class="fa-solid fa-dollar-sign"  style={{color: "#000000",marginRight:"5px"}}></i>
            {element.price}
          
            </div>
  
           </div>
    
        ))}
      </div>
      </div>
      <div className="because-image-container">
      <div className="because-container">
      <p>Because You viewed</p>
      <div><img src={values[4].image1} style={{ width: '50px', height: '50px' }} /></div>
      </div>
      <div className="landing-container" >
        {values.slice(4,8).map((element, index) => (
          <div key={index} className="product" id="products" onClick={()=>{history.push(`/products/${element.id}`)}}>
         
           
            <img src={element.image} alt={`Product ${index}`} style={{ width: '200px', height: '200px' }} />
            <div className="price">
            <i class="fa-solid fa-dollar-sign"  style={{color: "#000000",marginRight:"5px"}}></i>
            {element.price}
          
            </div>
  
           </div>
    
        ))}
      </div>
      </div>


 <div className="because-image-container">
    <div className="because-container">
      <p>Because You viewed</p>
      <div><img src={values[8].image1} style={{ width: '50px', height: '50px' }} /></div>
      </div>
      <div className="landing-container" >
        
        {values.slice(8,12).map((element, index) => (
          <div key={index} className="product" id="products" onClick={()=>{history.push(`/products/${element.id}`)}}>
         
           
            <img src={element.image} alt={`Product ${index}`} style={{ width: '200px', height: '200px' }} />
            <div className="price">
            <i class="fa-solid fa-dollar-sign"  style={{color: "#000000",marginRight:"5px"}}></i>
            {element.price}
          
            </div>
  
           </div>
    
        ))}
      </div>
      </div>

      </div>


    
  
          <Footer/>
    </>
  );
}





export default Landing