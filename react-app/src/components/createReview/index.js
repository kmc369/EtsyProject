import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as ReviewActions from '../../store/review'
import "./createReview.css"


function CreateReview() {
const [description,setDescription] = useState("")
const [stars,setStars] = useState(0)
const dispatch = useDispatch()
const [rating, setRating] = useState(0);

const handleStarClick = (selectedRating) => {
  setRating(selectedRating);
};

const handleSubmit = (e) =>{
    e.preventDefault()

    const reviewData = {
        stars:stars,
        description: description
    }

    dispatch(ReviewActions.createReviewThunk(reviewData))

    


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
            className={star <= rating ? 'star-filled' : 'star-empty'}
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
                onChange={(e)=>setDescription()}
                />
            </label>

        </form>
        </div>
    
  
    
    </>
    )
}

export default CreateReview

