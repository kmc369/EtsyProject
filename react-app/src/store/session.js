// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";
const GET_PRODUCT_OF_USER = "user/products"
const DELETE_PRODUCT='delete/product'
const EDIT_PRODUCT = "edit/product"


const setUser = (user) => ({
	type: SET_USER,
	payload: user,
});

const removeUser = () => ({
	type: REMOVE_USER,
});
export const delete_product = (product_id,data)=>{
	
    return {
        type:DELETE_PRODUCT,
        payload:{
			product_id,
			data
		}
    }
}

export const get_user_products = (data) =>{
    return {
        type:GET_PRODUCT_OF_USER,
        payload:data

        
    }
}

export const edit_product = (data)=>{
    return {
        type:EDIT_PRODUCT,
        payload:data
    }
}



export const authenticate = () => async (dispatch) => {
	const response = await fetch("/api/auth/", {
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (response.ok) {
		const data = await response.json();
		if (data.errors) {
			return;
		}

		dispatch(setUser(data));
	}
};

export const login = (email, password) => async (dispatch) => {
	const response = await fetch("/api/auth/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email,
			password,
		}),
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(setUser(data));
		return null;
	} else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};

export const logout = () => async (dispatch) => {
	const response = await fetch("/api/auth/logout", {
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (response.ok) {
		dispatch(removeUser());
	}
};

export const signUp = (username, email, password) => async (dispatch) => {
	const response = await fetch("/api/auth/signup", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username,
			email,
			password,
		}),
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(setUser(data));
		return null;
	} else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};


export const getUserProductThunk = (user_id) => async(dispatch,getState) =>{

 
    const res = await fetch(`/api/products/user/${user_id}`,{
        method:"GET",
     
    })
    if(res.ok){
        const data = await res.json()
		
        dispatch(get_user_products(data))
        return data
    }
}
export const deleteProductThunk = (product_id) => async(dispatch,getState) =>{
    const res = await fetch(`/api/products/delete/${product_id}`,{
        method:"DELETE"
    })
    if(res.ok){
        const data = await res.json()
        dispatch(delete_product(product_id,data))
        return data
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

const initialState = { user: null };
export default function reducer(state = initialState, action) {
	switch (action.type) {
		case SET_USER:
			return { user: action.payload };
		case REMOVE_USER:
			return { user: null };
		case GET_PRODUCT_OF_USER:{
          	const newState = {...state, user:{...state.user}}
			newState.user.products = action.payload
			return newState
			}
		case DELETE_PRODUCT:{
		
			const newState = {...state,user:{...state.user}, products:{...state.user.products}}
			const updatedProducts = state.user.products.filter(
				(product) => product.id !== action.payload.product_id
			  );
			  newState.user.products = updatedProducts
		
			return newState
		}
		case EDIT_PRODUCT:{
           
			const newState = {...state,user:{...state.user}, products:{...state.user.products}}
            // newState.user.products[action.payload.id] = action.payload
			const index = state.user.products.findIndex((product) => product.id === action.payload.id);
			console.log("the index is",index)
			newState.user.products[index] = action.payload




			
            return newState
        }
		default:
			return state;
	}
}