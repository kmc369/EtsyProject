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
         <img src="https://i.etsystatic.com/30981785/r/il/393034/4645837193/il_794xN.4645837193_qkwb.jpg" style={{width:"130px",height:"130px"}}/>
      <img src="https://i.etsystatic.com/17305851/r/il/319e0d/4796740674/il_794xN.4796740674_mypt.jpg" style={{width:"130px",height:"130px"}}/>
      <img src="https://i.etsystatic.com/11753776/r/il/51dcbb/1975020708/il_794xN.1975020708_1t4i.jpg" style={{width:"130px",height:"130px"}}/>
      <img src="https://i.etsystatic.com/32516685/r/il/2f2f23/4963062963/il_794xN.4963062963_aisj.jpg" style={{width:"130px",height:"130px"}}/>
      <img src="https://i.etsystatic.com/25199519/r/il/3df845/4968305885/il_794xN.4968305885_l8pb.jpg" style={{width:"130px",height:"130px"}}/>

    </div>
         
    <div className="center-container1">
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