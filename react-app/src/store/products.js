
//ACTION TYPES
const GET_PRODUCTS = 'get/products'
const DELETE_PRODUCT='delete/product'
const CREATE_PRODUCT='create/product'
const EDIT_PRODUCT = "edit/product"
const GET_PRODUCT_BY_ID = "get/product/by/id"


const CREATE_REVIEW = 'create/review'
const EDIT_REVIEW = 'edit/review'
const DELETE_REVIEW = 'delete/review'
//ACTIONS


export const get_products = (data) =>{
    return {
        type:GET_PRODUCTS,
        payload:data
    }
}

export const get_products_by_id = (data) =>{
    return {
        type:GET_PRODUCT_BY_ID,
        payload:data
    }
}

export const delete_product = (data)=>{
    return {
        type:DELETE_PRODUCT,
        payload:data
    }
}

export const create_product = (data)=>{
    return {
        type:CREATE_PRODUCT,
        payload:data
    }
}

export const edit_product = (data)=>{
    return {
        type:EDIT_PRODUCT,
        payload:data
    }
}
const create_review = (product_id,data) =>{
 
    return {
        type:CREATE_REVIEW,
        payload:{
            product_id,
            data
        }
    }
}


const edit_review = (review_id,data)=>{

    return {
        type:EDIT_REVIEW,
        payload:{
            review_id,
            data
        }
    }
}

const delete_review = (review_id,index) =>{
    return {
        type:DELETE_REVIEW ,
        payload:{
            review_id,
            index

        }
    }
}









// THUNKS




export const createProductThunk = (product) => async(dispatch,getState) =>{
    console.log("the data doing in is",product.get("image"))
 try{
    const res = await fetch("/api/products/new_product",{
        method:"POST",
        body:product
    })
    if(res.ok){
        const data = await res.json()
        dispatch(create_product(data))
        return data
    }else{
        const error = await res.json()
        return error
    }
}catch(error){
    console.log("the error is", error)
}
   
}


export const getProductByIdThunk = (product_id) => async (dispatch, getState) => {
   
    const res = await fetch(`/api/products/single_product/${product_id}`,{
       method: "GET"
   });
   if (res.ok) {
       const data = await res.json();
       dispatch(get_products_by_id(data));
       return data;
   } 
}


export const deleteProductThunk = (product_id) => async(dispatch,getState) =>{
    const res = await fetch(`/api/products/delete/${product_id}`,{
        method:"DELETE"
    })
    if(res.ok){
        const data = await res.json()
        dispatch(delete_product(data))
        return data
    }
}


export const getAllProductThunk = () => async (dispatch, getState) => {
         const res = await fetch('/api/products/',{
            method: "GET"
        });
        if (res.ok) {
            const data = await res.json();
            dispatch(get_products(data));
            return data;
        } else {
          
            const errorData = await res.json();
            throw new Error(errorData.error || 'Failed to fetch data');
        }  
}

export const editProductThunk = (product,product_id) => async (dispatch, getState) => {
  

    // console.log("the product id is", product_id)
    const res = await fetch(`/api/products/update/${product_id}`,{
        method:"PUT",
        body:product
    })

   if (res.ok) {
       const data = await res.json();
       dispatch(edit_product(data));
       return data;
   } else {
     
       const errorData = await res.json();
       throw new Error(errorData.error || 'Failed to fetch data');
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
    else{
    

        const error = await res.json()
        // console.log("the error in thunk is",error)
        return error
        // console.log("the error is",error)
    
  
    }



}

export const editReviewThunk = (review_id,review)=>async(dispatch,getState) =>{

 
    const res = await fetch(`/api/review/update/${review_id}`,{
        method:"PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review),

    })
    if(res.ok){
        const data = await res.json()
        dispatch(edit_review(review_id,data))
        return data
    }


}
export const deleteReviewThunk = (review_id,index)=>async(dispatch,getState) =>{

 
    const res = await fetch(`/api/review/delete/${review_id}`,{
        method:"DELETE",
     
      

    })
    if(res.ok){
        const data = await res.json()
      
        dispatch(delete_review(review_id,index))
        return data
    }


}

//REDUCDER
const inital_state = {allProducts:{}, singleProduct:{}}

const productReducer = (state=inital_state, action)=>{
   
    switch(action.type) {
        case GET_PRODUCTS:{
          

            const newState = {...state, allProducts:{...state.allProducts}}
            //make a copy of all the keys in the data not whats in them

            // action.payload.forEach((element)=>{
            //     newState.allProducts[element.id]=element
            // })
            newState.allProducts = action.payload

            return newState
        }
     
        case DELETE_PRODUCT:{
            const newState = {...state,allProducts:{...state.allProducts}}
            newState.allProducts = action.payload
            return newState
        }
        case CREATE_PRODUCT:{
            const newState = {...state , allProducts:{...state.allProducts}}
            newState.allProducts[action.payload.id] = action.payload
            
            return newState
        }
        case EDIT_PRODUCT:{
           
            const newState = {...state,allProducts:{...state.allProducts}}
            newState.allProducts[action.payload.id] = action.payload
            return newState
        }
        case GET_PRODUCT_BY_ID:{
            const newState  = {...state, singleProduct:{...state.singleProduct}}
            newState.singleProduct = action.payload
            
            return newState
        }
        case CREATE_REVIEW: {
        
            const { product_id, data } = action.payload;
    
            const newState = { ...state,singleProduct:{...state.singleProduct}}

            const targetSpot = newState.singleProduct;
        
                  if (targetSpot) {
              targetSpot.reviews = [...targetSpot.reviews, data];
            
            }
            return newState;
         }

         case EDIT_REVIEW: {
            const { review_id, data } = action.payload;
          
            // Create a copy of the state
            const newState = {
              ...state,
              singleProduct: {
                ...state.singleProduct,
                reviews: [...state.singleProduct.reviews], 
              },
            };
          
       
            const reviewIndex = newState.singleProduct.reviews.findIndex(
              (review) => review.id === review_id
            );
          
     
            if (reviewIndex !== -1) {
           
              const updatedReview = {
                ...newState.singleProduct.reviews[reviewIndex],
                ...data,
              };
          
          
              newState.singleProduct.reviews = [
                ...newState.singleProduct.reviews.slice(0, reviewIndex),
                updatedReview,
                ...newState.singleProduct.reviews.slice(reviewIndex + 1),
              ];
            }
          
            return newState;
          }
          case DELETE_REVIEW: {
            const { review_id,index } = action.payload;
            const newState = { ...state, singleProduct: { ...state.singleProduct } };
            newState.singleProduct.reviews = [
                ...newState.singleProduct.reviews.slice(0, index),
                ...newState.singleProduct.reviews.slice(index + 1),
              ];
          
            return newState;
          }

          
          
          
          
          
          
        default:
            return state

    }
}


export default productReducer