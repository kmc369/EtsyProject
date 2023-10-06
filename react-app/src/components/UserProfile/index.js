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
          <div className="name-image">
          <img src={sessionUser.image} style={{ height: "40px", width: "40px", borderRadius: "25px" }} />
            <u onClick={()=>history.push(`userProfile/${sessionUser.id}`)}>{sessionUser.username}</u>
          </div>

          <div className="shop-name-product">
          <button className="create-product-button" onClick={() => history.push("/new_product")}>New Product</button>
          <p className="user-shop">{`${sessionUser.username}'s Shop`}</p>
          </div>
        </div>
      </div>

      <div className="products-containers">
        <div className="product-items">
          {values.map((element, index) => (
            <div key={index} id="product-user" className={`productz${index}` }>
              <img className="user-image-product" src={element.image} style={{ height: "230px", width: "230px",borderRadius:"10px" }} />
              <div className="manage-buttons">
              <span><OpenModalButton className="delete-product" buttonText="Delete Product" modalComponent={<DeleteProductModal prop={element}  onDelete={() => handleDelete(element.id)}/>}/></span>
              <span><button className="edit-product"  onClick={() => history.push(`/edit_product/${element.id}`)}>Edit Product</button></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="extra-stuff">
          <div className="footer-etsy">
            <i class="fa-solid fa-globe" style={{color:"white"}}> </i>
            <div className="powered">Etsy is powered by 100% renewable electricity.</div>
            </div>

          <div className="footer-container">
            <div className="fetsy-download">
                <div className="Fetsy-app" onClick={()=>{history.push('/')}}>Fetsy</div>
                <div className="download-word" onClick={()=>{history.push('/')}} >Download the Fetsy App</div>
            </div>

            <div className="shop-contact">
              <div className="contact-us">Contact us </div>
              <div className="socials">
                <div className="linkedIn"> linkedIn</div>
                <div className="gitHub"> GitHub</div>
                <div className="Twitter"> Twitter</div>
              </div>
            </div>
          </div>
      </div>
    </div>



            

        </>
    )
}

export default UserProfile