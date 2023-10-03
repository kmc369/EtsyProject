import React, { useEffect, useState } from "react";
import { useDispatch,useSelector  } from "react-redux";
import './editreview.css'
import * as PostActions from '../../store/products'




function EditReview({prop}){

    const [description,setDescription] = useState(prop.description)
    const [stars,setRating] = useState(prop.stars)
    const dispatch = useDispatch()
    const sessionUser = useSelector(state=>state.session.user)


    const handleStarClick = (selectedRating) => {
        setRating(selectedRating);
      };

    const handleSubmit = async (e) =>{
        e.preventDefault()
    
        const reviewData = {
            stars:stars,
            description: description,
            user_id:sessionUser.id,
            product_id:prop.id
    
        }
        // console.log("my data is ", reviewData)
     
         await dispatch(PostActions.createReviewThunk(prop.id,reviewData))
    
        setDescription("")
        setRating(0)
    
    
    }

    return (
        <>
          <div className="review-container">
    <form className="review-form-container" onSubmit={handleSubmit}>
            <h1 className="review-header">Leave a Review</h1>

            {/* put the product item here  */}

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
            <div className="button-container">
            <button className="cancel-button">Cancel</button>
            <button className="post-button" type="submit">Post your review</button>
            </div>
        </form>
        </div>
    
  
    
    </>
   
    )
}

export default EditReview