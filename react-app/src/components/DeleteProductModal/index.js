import React, { useState, useEffect, useRef } from "react";
import * as ProductActions from '../../store/products'
import { useDispatch,useSelector  } from "react-redux";
import * as UserAction from '../../store/session'
import UserProfile from "../UserProfile";
import { useHistory } from "react-router-dom/";

function DeleteProductModal ({ prop, buttonText, onDelete }){
    const dispatch = useDispatch()
    const history = useHistory()
     const sessionUser = useSelector(state=>state.session.user)

    const handleDelete = async () => {
      dispatch(ProductActions.deleteProductThunk(prop.id))
      await onDelete(prop.id);
      history.push(`/userProfile/${sessionUser.id}`)
    };

      return (
          <>
          <div>
         <div className="delete-spot">
        <h2>Confirm Delete</h2>
        <p>Are you sure you want to remove this spot from the listing?</p>
        <div><button className='confirm'  type='submit' onClick={handleDelete} >Yes, Delete Spot</button></div>
        <div><button className='deny' >No, Keep Spot</button></div>
      </div>
      </div>
          </>
      )
      

}

export default DeleteProductModal