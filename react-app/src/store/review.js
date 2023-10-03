import session from './session'
const CREATE_REVIEW = 'create/review'
const EDIT_REVIEW = 'edit/review'
const GET_REVIEWS = 'get/reviews'
// ACTIONS
const create_review = (product_id,data) =>{
 
    return {
        type:CREATE_REVIEW,
        payload:{
            product_id,
            data
        }
    }
}

const get_reviews = (data) =>{
 
    return {
        type:GET_REVIEWS,
        payload:data
        
    }
}









//THUNKS
export const getAllReviewsThunk = ()=>async(dispatch,getState) =>{
   
    const res = await fetch('/api/review/get/reviews',{
        method:"GET",
    
    })
    if(res.ok){
        const data = await res.json()
        console.log("the data coming back is",data)
        dispatch(get_reviews(data))
        return data
    }


}

export const createReviewThunk = (product_id,review)=>async(dispatch,getState) =>{

 
    const res = await fetch('/api/review/new_review',{
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review),

    })
    if(res.ok){
        const data = await res.json()
        dispatch(create_review(product_id,data))
        return data
    }


}


//startiig



//Reducers 

const initialState = {allReviews:{}, productReviews:{}}


export const reviewsReducer=(state=initialState ,action)=>{
   
    switch(action.type){
    case GET_REVIEWS:{
        const newState = {...state , allReviews:{...state.allReviews}}
        action.payload.forEach(element => {
            newState.allReviews[element.id] = element
        });
        return newState
    }
    case CREATE_REVIEW: {
        
        const { product_id, data } = action.payload;

        const newState = { ...state}
        const targetSpot = newState.productReviews[product_id];
        console.log("the target spot is" ,targetSpot)
              if (targetSpot) {
          targetSpot.reviews = [...targetSpot.reviews, data];
        //   allReview = [...allReview]
        //append the data to all reviews 
        }
        return newState;
     }




        default:
            return state
    }
}

export default reviewsReducer

