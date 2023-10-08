const GET_SEARCH = "get/search"




export const get_search = (data) =>{
    return {
        type:GET_SEARCH,
        payload:data
    }
}


export const getSearchThunk = (search) => async (dispatch, getState) => {
    
    const res = await fetch(`/api/search/${search}`,{
       method: "GET"
   });
   if (res.ok) {
       const data = await res.json();
       dispatch(get_search(data));
        console.log("the data being retunred is",data)
       return data;
   } 
}

const inital_state = {searchProducts :{}}
const searchReducer = (state=inital_state, action)=>{
   
    switch(action.type) {
        case GET_SEARCH:{
          

            const newState = {...state, searchProducts:{...state.searchProducts}}
            //make a copy of all the keys in the data not whats in them

          
            newState.searchProducts = action.payload.data
     
            return newState
        }
    default:
        return state
    
    
    }
}

export default searchReducer






