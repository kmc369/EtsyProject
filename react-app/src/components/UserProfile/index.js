import React, { useState, useEffect, useRef } from "react";
import * as UserAction from '../../store/session'
import * as ProductActions from '../../store/products'

import { useDispatch,useSelector  } from "react-redux";
import './userProfile.css'
import { useHistory } from "react-router-dom/";
import OpenModalButton from '../OpenModalButton'
import DeleteProductModal from "../DeleteProductModal";
function UserProfile(){

const dispatch = useDispatch()
const sessionUser = useSelector(state=>state.session.user)
const updatedProducts = useSelector(state => state.session.user.products ?? []);
const [products,setProducts] = useState()
const history = useHistory()



useEffect(() => {
  fetchData();
}, [dispatch, sessionUser.id]);

const fetchData = async () => {
  const data = await dispatch(UserAction.getUserProductThunk(sessionUser.id))
  setProducts(data)
};

  
    const handleDelete = async (productId) => {
      await dispatch(UserAction.deleteProductThunk(productId));
      fetchData(); 
    };

  

    if(!products){
        return null;
    }
    const values = Object.values(products)
        
    return (

        <>
  
    <div>
      <div>
        <div className="header">
          <img src={sessionUser.image} style={{ height: "60px", width: "60px", borderRadius: "15px" }} />
          {sessionUser.username}
          <button className="create-product" onClick={() => history.push("/new_product")}>Create Product</button>
        </div>
      </div>

      <div className="products-containers">
        <div className="product-items">
          {values.map((element, index) => (
            <div key={index} className={`product${index}`}>
              <img src={element.image} style={{ height: "200px", width: "200px" }} />
              <span><OpenModalButton
  modalComponent={
    <DeleteProductModal
      prop={element}
      buttonText="Delete Product"
      onDelete={() => handleDelete(element.id)}
    />
  }
/></span>
              <span><button>Product</button></span>
            </div>
          ))}
        </div>
      </div>

      <div className="extra-stuff"></div>
    </div>



            

        </>
    )
}

export default UserProfile