import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom/";
import { useDispatch } from "react-redux";
import * as SearchAction from '../../store/search'
import { useParams } from 'react-router-dom'; 

function Search(){
    
    
    const {search} = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
	const [searchData,setSearchData] = useState([])

    useEffect(()=>{

        const fetchData = async() =>{
        		if(search!==""){
			const data = await dispatch(SearchAction.getSearchThunk(search))
		
			setSearchData(data)
		
        }
    }
    fetchData()
    },[dispatch,search])

    if (searchData.length===0){
     
        return null
    }
  
    return (
        <>
          <div className="landing-container" >
        {searchData.map((element, index) => (
          <div key={index} className="product" id="products" onClick={()=>{history.push(`/products/${element.id}`)}
          }>
            <img src={element.image1} alt={`Product ${index}`} style={{ width: '200px', height: '200px' }} />
            <div className="price">
            <i class="fa-solid fa-dollar-sign"  style={{color: "#000000",marginRight:"5px"}}></i>
            {element.price}
            </div>
          </div>
        ))}
      </div>
        
        </>
    )
}

export default Search