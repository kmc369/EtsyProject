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
    const [currentIndex, setCurrentIndex] = useState(0);


    const images = [
      'https://www.fotor.com/blog/wp-content/uploads/2019/08/Untitled-design-2019-08-15T165127.478.jpg',


      'https://www.fotor.com/blog/wp-content/uploads/2019/08/Untitled-design-2019-08-15T152106.649.jpg',


      "https://www.fotor.com/blog/wp-content/uploads/2019/08/Etsy-Shop-Banner.jpg",
      
      // "https://www.constantcontact.com/blog/wp-content/uploads/2019/01/Artboard-2.png",

      "https://www.fotor.com/blog/wp-content/uploads/2019/08/Untitled-design-2019-08-15T164109.840.jpg",
      
      'https://www.fotor.com/blog/wp-content/uploads/2019/08/Untitled-design-2019-08-15T164617.072.jpg',
      "https://www.fotor.com/blog/wp-content/uploads/2019/08/Untitled-design-2019-08-15T164713.036.jpg",
    ];

    useEffect(()=>{

      

        const fetchData = async() =>{
			    const data = await dispatch(SearchAction.getSearchThunk(search))
			     setSearchData(data)
    }
    
    fetchData()
    },[dispatch,search])

    const updateImageIndex = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    useEffect(() => {
      // Create a timer to change images every 2 seconds
      const timer = setInterval(updateImageIndex, 3000);
  
      // Clean up the timer when the component unmounts
      return () => {
        clearInterval(timer);
      };
    }, [images]);
  
    return (
        <>
        <div className="search-entire-frame">
          <div className="top-image-search">
            <img className="image-search-interval" src={images[currentIndex]} alt="Slider" />
        </div>
          <div className="search-container-frame" >
        {searchData.length===0 ? (
          
          <div className="no-result">No result found  </div>
          
        ):(
        searchData.map((element, index) => (
           
            <div key={index} className="search-products-container">
            <div> <img src={element.image} alt={`Product ${index}`} style={{ width: '200px', height: '200px' ,borderRadius:"10px"}} onClick={()=>{history.push(`/products/${element.id}`)}}/></div>
              <div className="search-title">
              {element.title.length > 100 ? (
            element.title.substring(0, 100) + '...'
          ) : (
            element.title
          )}
                
              </div>
              {/* <div>${element.price} </div> */}
            </div>
          
      
        ))

        )}
      </div>
      </div>
        
        </>
    )
}

export default Search