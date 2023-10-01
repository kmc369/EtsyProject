
//ACTION TYPES
const GET_PRODUCTS = 'get/products'
const DELETE_PRODUCT='delete/product'
const CREATE_PRODUCT='create/product'


//ACTIONS
export const get_products = (data) =>{
    return {
        type:GET_PRODUCTS,
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









// THUNKS
export const createProductThunk = (product) => async(dispatch,getState) =>{
 
   const image= product.get("image")
   console.log("the image from thunl is ", image)
    const res = await fetch("/api/products/new_product",{
        method:"POST",
        body:product
    })
    if(res.ok){
        const data = await res.json()
        dispatch(create_product(data))
        return data
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


//REDUCDER
const inital_state = {allProducts:{}}

const productReducer = (state=inital_state, action)=>{
   
    switch(action.type) {
        case GET_PRODUCTS:{
        
            const newState = {...state, allProducts:{...state.allProducts}}
            //make a copy of all the keys in the data not whats in them

            action.payload.forEach((element)=>{
                newState.allProducts[element.id]=element
            })
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
        default:
            return state

    }
}


export default productReducer