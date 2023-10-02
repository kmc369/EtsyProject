const CREATE_REVIEW = 'create/review'


// ACTIONS
const create_review = (data) =>{

    return {
        type:CREATE_REVIEW,
        payload:data
    }
}






//THUNKS

export const createReviewThunk = (review)=>async(dispatch,getState) =>{

    const res = await fetch('/api/review/new_review',{
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review),

    })
    if(res.ok){
        const data = await res.json()
        dispatch(create_review(data))
        return data
    }


}


//startiig



//Reducers 

const initialState = {}


export const reviewsReducer=(state=initialState ,action)=>{

    switch(action.type){
      
      
    //   case CREATE_REVIEW: {
    //     const { spotId, newReview } = action.payload;

       
    //     const newState = { ...state };
    //     const targetSpot = newState.spot[spotId];
    //           if (targetSpot) {
    //       targetSpot.reviews = [...targetSpot.reviews, newReview];
    //     }
      
    //     return newState;
    //   }


        default:
            return state
    }
}

