import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as ProductActions from '../../store/products'
import "./createProduct.css"
import EditProduct from "../EditProduct";


function CreateReview() {
const [description,setDescription] = useState("")
const [stars,setStars] = useState(0)


    return (
    <>
    <div  >

            <label className="star-label">
                    <input 
                    type="number"
                    />
                   
             </label>
            <label className="description-label" >
                <textarea
                type="text"
                value = {description}
                onChange={(e)=>setDescription()}
                />
            </label>

            
    
    </div>
    
    </>
    )
}

export default CreateReview

