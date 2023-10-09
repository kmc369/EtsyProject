import React, { useEffect, useState } from "react";
import { useDispatch,useSelector  } from "react-redux";
import * as ProductActions from '../../store/products'
import { useModal } from '../../context/Modal';
import './deleteReview.css'
function DeleteReview({prop,index,onDeleteReview}){
    const { closeModal } = useModal();
    const dispatch = useDispatch()

const handleDelete = async(e)=>{
    e.preventDefault()
  
        await onDeleteReview(prop.id,index)
        closeModal()
  }

  return (

    <>
    <div className="deleteModel-container">
      <h2 className="delete-review-word">Are you sure you want to delete this review</h2>
      <div> <p className="delete-review-word1">This action can not be undone</p></div>
      <div className="buttonItems">
        <button className="delete-button1"onClick={handleDelete}>Yes</button>
        <button className="delete-button" onClick={closeModal}>NO</button>
      </div>
    </div>
    </>
  )



}
export default DeleteReview