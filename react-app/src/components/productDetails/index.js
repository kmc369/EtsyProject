import React, { useEffect, useState } from "react";
import { useDispatch,useSelector  } from "react-redux";
import * as ReviewActions from '../../store/review'
import * as ProductActions from '../../store/products'
import { useParams } from "react-router-dom";





const ProductDetails = () =>{
   
    const dispatch = useDispatch()
    const {product_id} = useParams()
    const product_id_num = Number(product_id)
    const [product,setProduct]=useState({})
   

    useEffect(()=>{
        async function fetchData (){
           const product =  await dispatch(ProductActions.getProductByIdThunk(product_id_num))
           setProduct(product)
           const reviews = await dispatch(ReviewActions.getAllReviewsThunk())
        }
       
        fetchData()
      
    },[dispatch,product_id_num])

  
    if(Object.keys(product).length===0){
     
        return null
    }
    console.log("the product is", product)
    
    return (
        <>
        <h1>hello from product details</h1>
        <div>Product info</div>


        <div className="review-container">
        

        </div>



        </>
    )



}

export default ProductDetails