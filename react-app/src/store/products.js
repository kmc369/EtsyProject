
//ACTION TYPES
const GET_PRODUCTS = 'get/products'




//ACTIONS
export const get_products = (data) =>{
    return {
        type:GET_PRODUCTS,
        payload:data
    }
}








// THUNKS
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
        case GET_PRODUCTS:
            const newState = {...state, allProducts:{...state.allProducts}}
            //make a copy of all the keys in the data not whats in them
            newState.allProducts = action.payload.data
            return newState
        default:
            return state

    }
}


export default productReducer