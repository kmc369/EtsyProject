import React, { useState, useEffect, useRef } from "react";
import * as ProductActions from '../../store/products'
import { useDispatch,useSelector  } from "react-redux";
import * as UserAction from '../../store/session'
import UserProfile from "../UserProfile";
import { useHistory } from "react-router-dom/";
import { useModal } from '../../context/Modal';
function DeleteProductModal ({ prop, buttonText, onDelete }){
    const dispatch = useDispatch()
    const history = useHistory()
     const sessionUser = useSelector(state=>state.session.user)
     const { closeModal } = useModal();

    const handleDelete = async () => {
      dispatch(ProductActions.deleteProductThunk(prop.id))
      await onDelete(prop.id);
      history.push(`/userProfile/${sessionUser.id}`)
      closeModal()
    };

      return (
          <>
          <>
    <div className="deleteModel-container">
      <h2 className="delete-review-word">Are you sure you want to delete this Product</h2>
      <div> <p className="delete-review-word1">This action can not be undone</p></div>
      <div className="buttonItems">
        <button className="delete-button1"onClick={handleDelete}>Yes</button>
        <button className="delete-button" onClick={closeModal}>NO</button>
      </div>
    </div>
    </>
          </>
      )
      


}

export default DeleteProductModal