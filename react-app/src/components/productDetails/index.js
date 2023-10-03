import React, { useEffect, useState } from "react";
import { useDispatch,useSelector  } from "react-redux";
import * as ReviewActions from '../../store/review'
import * as ProductActions from '../../store/products'
import { useParams,useHistory } from "react-router-dom";
import CreateReview from "../createReview";

import './details.css'



const ProductDetails = () =>{
   
    const dispatch = useDispatch()
    const {product_id} = useParams()
    const product_id_num = Number(product_id)
    const [product,setProduct]=useState({})
    const history = useHistory()



function dateFormat(timestamp){

    const date = new Date(timestamp);
  
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const monthYearFormat = `${months[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
  return monthYearFormat;
  }

    useEffect(()=>{
        async function fetchData (){
           const product =  await dispatch(ProductActions.getProductByIdThunk(product_id_num))
           setProduct(product)
        //    const reviews = await dispatch(ReviewActions.getAllReviewsThunk())
        // const product_reviews = await dispatch(c)
        }
       
        fetchData()
      
    },[dispatch,product_id_num])
    console.log("the product is", product)
  
    if(Object.keys(product).length===0){
     
        return null
    }
    const reviews = product.reviews

    console.log("the product is", product)
    
    return (
        <>
       <div className="product-container">
            <div>Product info</div>
            <div className="images-container">
                <div className="big-image">
                    <img src={product.image} style={{height:"200px",width:"200px"}}/>
                </div>
                <div className="sideImages">
                    <img src={product.image1} style={{height:"200px",width:"200px"}}/>
                    <img src={product.image2} style={{height:"200px",width:"200px"}}/>
                    <img src={product.image3} style={{height:"200px",width:"200px"}}/>
                </div>
            </div>

        </div>






        <div className="review-container-location">
        {/* <CreateReview product={product}/> */}
        <div className="header-reviews">
            <div className="header-stars1" >{reviews.length}  reviews</div>
            <span className="heade-starts2"> ★ ★ ★ ★ ★</span>
        
      
        <div ><button className="leave-review-button">Leave Review</button></div>
         </div>

        {reviews
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((element,index)=>(
            <div className="review-container1">
            
            <div key={index} className="star-container1" >
            {Array.from({length:element.stars}).map((_,starIndex) => (
            
                <span key={starIndex}>  ★</span>
               
            ))}
              </div>
           
             <div className="desc-container">
             {element.description}
             </div>

            

             <div className="purchased-items"> 
                <p className="para-date">purchased item: <u>{product.title}</u></p>
             </div>

             <div className="image-items"> 
                <img className="para-date" style={{height:"60px",width:"60px",borderRadius:"8px"}} src={product.image}/>
             </div>

             <div className="user-items"> 
               <img src={product.reviews[index].user.image} style={{height:"30px",width:"30px",borderRadius:"20px"}}/>
               <div> <u>{product.reviews[index].user.username}</u> </div>
               <div className="para-date">{dateFormat(element.created_at)}</div>
             </div>
            </div>
            
          
             ))}
             

        </div>



        </>
    )



}

export default ProductDetails