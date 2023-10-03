import session from './session'
const CREATE_REVIEW = 'create/review'
const EDIT_REVIEW = 'edit/review'

// ACTIONS
const create_review = (product_id,data) =>{
 
    return {
        type:CREATE_REVIEW,
        payload:{
            id:product_id,
            data:data
        }
    }
}

// const create_review = (product_id,data) =>{
 
//     return {
//         type:CREATE_REVIEW,
//         payload:{
//             id:product_id,
//             data:data
//         }
//     }
// }







//THUNKS

export const createReviewThunk = (review)=>async(dispatch,getState) =>{
    const {stars,description,user_id,product_id} = review
 
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

const initialState = {singleProduct:{}, user:{}}


export const reviewsReducer=(state=initialState ,action)=>{
   
    switch(action.type){
      case CREATE_REVIEW: {
      
        const { product_id, data } = action.payload;

       
        const newState = { ...state };
        const targetSpot = newState.singleProduct[product_id];
              if (targetSpot) {
          targetSpot.reviews = [...targetSpot.reviews, data];
        }
        return newState;
     }




        default:
            return state
    }
}

export default reviewsReducer

