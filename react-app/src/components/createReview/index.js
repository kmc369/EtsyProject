import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import * as PostActions from '../../store/products'
import "./createReview.css"
import { useModal } from '../../context/Modal';

function CreateReview({prop, onCreateReview}) {
const [description,setDescription] = useState("")
const [stars,setRating] = useState(0)
const dispatch = useDispatch()
const { closeModal } = useModal();
const sessionUser = useSelector(state=>state.session.user)
const [errors, SetErrors]= useState({})


const handleStarClick = (selectedRating) => {
  setRating(selectedRating);
};

const handleSubmit = async (e) =>{
    e.preventDefault()

    let err ={}
    if(stars===0){
        err.stars = "Star count must be greater than 0"
    }
    if(description.length<15){
        err.description = "Description be greater than 15 character"
      }
      SetErrors(err)
  


    const reviewData = {
        stars:stars,
        description: description,
        user_id:sessionUser.id,
        product_id:prop.id

    }

   
 
 
    if(Object.values(err).length===0){
        await onCreateReview(reviewData);
        setDescription("")
        setRating(0)
        closeModal()

    }    




   
      
       
    
        


}
useEffect(()=>{

   

    async function FetchData(){
      await dispatch(PostActions.getProductByIdThunk(prop.id))
    }
    FetchData()
},[dispatch,prop.id,description,stars])

const errorsArr = Object.values(errors)

    return (
    <>

    <div className="review-container">
    <form className="review-form-container" onSubmit={handleSubmit}>
    <ul className="errors">
					{errorsArr.map((error, idx) => (
						<li key={idx}>{error}</li>
					))}
				</ul>
        
            <h1 className="review-header">Leave a Review</h1>
            
        

            <h3 className="smaller-header">My Review</h3>
        <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
            <span
            key={star}
            id="starsize"
            className={star <= stars ? 'star-filled' : 'star-empty'}
            onClick={() => handleStarClick(star)}
                >
             ★
            </span>
            ))}
           

         </div>
         <p className="errors">{errors.stars}</p>

         <div className="list-container">
         <p className="para-help">Helpful reviews on Fetsy mention:</p>
                <ul className="list-items">
                   <li className="list1">the quality of the item</li>
                   <li className="list1">if it was as described</li>
                   <li className="list1">if your expectations were met </li>
                </ul>

            </div>
            <label className="description-label" >
                <textarea className="text-input"
                type="text"
                value = {description}
                onChange={(e)=>setDescription(e.target.value)}
                />
            </label>
            <p className="errors">{errors.description}</p>
            <div className="button-container">
            <button className="cancel-button" onClick={closeModal} >Cancel</button>
            <button className="post-button" type="submit">Post your review</button>
            </div>
        </form>
        </div>
    
  
    
    </>
    )
}

export default CreateReview

