import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom/";
import { useDispatch } from "react-redux";
import * as SearchAction from '../../store/search'
import { useParams } from 'react-router-dom'; 
import "./searchItem.css"

function Search(){
    
    
    const {search} = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
	const [searchData,setSearchData] = useState([])

    useEffect(()=>{

        const fetchData = async() =>{
       
       
			    const data = await dispatch(SearchAction.getSearchThunk(search))
        
          if(data.length===0){
           
            history.push("/")
          }
			     setSearchData(data)
       
       
     
    }
    fetchData()
    },[dispatch,search])

    if (searchData.length===0){
     
        return null
    }
  
    return (
        <>
          <div className="search-container-frame" >
        {searchData.map((element, index) => (
           
            <div key={index} className="search-products-container">
            <div> <img src={element.image1} alt={`Product ${index}`} style={{ width: '200px', height: '200px' ,borderRadius:"10px"}} onClick={()=>{history.push(`/products/${element.id}`)}}/></div>
              <div className="search-title">{element.title} </div>
              {/* <div>${element.price} </div> */}
            </div>
          
      
        ))}
      </div>
        
        </>
    )
}

export default Search