import React, { useEffect, useState } from "react";
import { useDispatch,useSelector  } from "react-redux";
import * as ProductActions from '../../store/products'

function DeleteReview({prop,index,onDeleteReview}){
    console.log('the prop is',prop, index)
    const dispatch = useDispatch()

const handleDelete = async(e)=>{
    e.preventDefault()
        // await  dispatch(ProductActions.deleteReviewThunk(prop.id,index))
        await onDeleteReview(prop.id,index)
  }

  return (

    <>
    <h1>Are you sure you want to delete</h1>
    <button onClick={handleDelete}>Yes</button>
    
    </>
  )



}
export default DeleteReview