import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as ProductActions from '../../store/products'

import "./createProduct.css"
import EditProduct from "../EditProduct";
import { useHistory } from "react-router-dom/";
import * as UserAction from '../../store/session'
import UserProfile from "../UserProfile";
function NewProduct() {
const sessionUser = useSelector(state => state.session.user)
const history = useHistory()
const dispatch = useDispatch()
const [price,setPrice] = useState(0)
const [image,setImage]=useState(null)
const [image1,setImage1]=useState(null)
const [image2,setImage2]=useState(null)
const [image3,setImage3]=useState(null)
const [handmade , setHandmade]=useState(false)
const [vintage , setVintage]=useState(false)
const [madeToOrder , setmadeToOrder]=useState(false)
const [creator , setCreator]=useState("")
const [title , setTitle]=useState("")
const [material,setMaterial] = useState("")
const [description,setDescription]=useState("")
const [userId,setUserId] = useState(sessionUser.id)
const [imageLoading, setImageLoading] = useState(false);
const [errors,setErrors] = useState({})



    async function handleSubmit(e){
        e.preventDefault();
      
    
        const err = {}

        if(title.length<4){
            err.title = "Title must be greater than 4 character"
        }

        if(creator.length<4){
            err.creator = "Creator must be greater than 4 character"
        }
        if(material.length<4){
            err.material = "material must be greater than 4 character"
        }
        if(price<=0){
            err.price = "price must be greater than 0"
        }
      
        if(description.length<30){
            err.description = "description must be greater than 30 character"
        }
     
        setErrors(err)
     
    
        
        const formData = new FormData();
        formData.append('image', image);
        formData.append('image1', image1);
        formData.append('image2', image2);
        formData.append('image3', image3);
        formData.append('price', price);
        formData.append('handmade', handmade);
        formData.append('vintage', vintage);
        formData.append('madeToOrder', madeToOrder);
        formData.append('title', title);
        formData.append('creator', creator);
        formData.append('material', material);
        formData.append('description', description);
        formData.append('user_id', userId);
        
       

       
        if(Object.values(err).length===0){
            await dispatch(ProductActions.createProductThunk(formData))
            setImageLoading(true);
            setCreator("")
            setDescription("")
            setMaterial("")
            setTitle("")
            setPrice(0)
            setHandmade(false)
            setVintage(false)
            setmadeToOrder(false)
        return history.push(`/userProfile/${userId}`)
        }
        
        
       
      
     
      
     
       
       
      }

      

      const errorsArr = Object.values(errors)


    return (
        <>
   
    <form className="create-listing-container"  method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
                <ul className="errors">
					{errorsArr.map((error, idx) => (
						<li key={idx}>{error}</li>
					))}
				</ul>
            <h1 className="listing-header">Create a listing </h1>
            <h3 className="second-header">Add some photos and details about your item. Fill out what you can for now—you’ll be able to edit this later.</h3>
        <div className="photo-container">
                <h3 className="photo-header">Photos</h3>
                <p className="p-header">Add as many as you can so buyers can see every detail.</p>
            
            <div className="photo-image-container">
                <div className="photo-words">
                    <h4 className="photo-header4">Photos *</h4>
                    <p className="para-4">Use up to ten photos to show your item's most important qualities.</p>
                    <ul className="list-elements">
                        <li>Use natural light and no flash.</li>
                        <li>Include a common object for scale.</li>
                        <li>Show the item being held, worn, or used.</li>
                        <li>Shoot against a clean, simple background.</li>
                        <li>Add photos to your variations so buyers can see all their options.</li>
                    </ul>
                </div>
                <div className="photo-images">
                    <div>
                    <label className='custom-file-input-label' htmlFor="file-input">
                        <div><i class="fa-solid fa-camera" style={{"color": "#121416"}}></i></div>
                        <div>Add a photo</div>
                        </label>
                    
                    <input  
                    onChange={(e)=>setImage(e.target.files[0])}
                    type="file" 
                    id="file-input" 
                    className="input-image1" 
                    accept="image/*" />
                    </div>
                    {(imageLoading)&& <p>Loading...</p>}


                    <div>
                    <label className='custom-file-input-label' htmlFor="file-input">
                        <i class="fa-solid fa-camera" style={{"color": "#121416"}}></i>
                        <div>Add a photo</div>
                    </label>
                    <input type="file" id="file-input" className="input-image1" 
                    onChange={(e)=>setImage1(e.target.files[0])}
                    accept="image/*" />
                    </div>
                    {(imageLoading)&& <p>Loading...</p>}


                    <div>
                    <label className='custom-file-input-label' htmlFor="file-input">
                    <i class="fa-solid fa-camera" style={{"color": "#121416"}}></i>
                    <div>Add a photo</div>
                        
                    </label>
                    <input type="file" id="file-input" className="input-image1" accept="image/*" onChange={(e)=>setImage2(e.target.files[0])}/>
                    </div>
                    {(imageLoading)&& <p>Loading...</p>}


                    <div>
                    <label className='custom-file-input-label' htmlFor="file-input">
                    <i class="fa-solid fa-camera" style={{"color": "#121416"}}></i>
                        <div>Add a photo</div>
                    </label>
                    <input type="file" id="file-input" className="input-image1" accept="image/*" onChange={(e)=>setImage3(e.target.files[0])} />
                    </div>   
                    {(imageLoading)&& <p>Loading...</p>}
 

                </div>    
            </div>
        </div>


    <div className="listing-details-container">
            <div className="listing-words">
                <h3  className="photo-header">Listing Details</h3>
                <p className="p-header">Tell the world all about your item and why they’ll love it.</p>
            </div>

        <div className="input-feilds">
            <div className="title">
                <div className="title-words">
                    <h5 className="title-header">Title *</h5>
                    <p className="p-header-listing">Include keywords that buyers would use to search for your item.</p>
                </div>
            
                 <input
                 className="title-input"
                 required
                type="text"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            
                />
            </div>
            <div className="handmade">
                <div className="handmade-words">
                    <h5 className="handmade-header">Handmade *</h5>
                    <p className="p-header-listing">Tell the users if the design is custom.</p>
                </div>

                <div className="radio-container">
                        <div>
                            <input
                                className="radio-input"
                                type="radio"
                                name="handmade"
                                value="true"
                                checked={handmade===true}
                                onChange={(e)=>setHandmade(true)}
                                
                            />
                           Yes, The current product is handmade
                        </div>

                        <div>
                            <input
                                className="radio-input"
                                type="radio"
                                name="handmade"
                                value="false"
                                checked={handmade===false}
                                onChange={(e)=>setHandmade(false)}


                            />
                        No, The current product is NOT handmade
                        </div>
                </div>
            </div>



            <div className="vintage">
                <div className="vintage-words">
                    <h5 className="vintage-header">Vintage *</h5>
                    <p className="p-header-listing">Tell the users if the design is custom.</p>
                </div>

                <div className="radio-container">
                        <div>
                            <input
                                className="radio-input"
                                type="radio"
                                name="vintage"
                                value="true"
                                checked={vintage===true}
                                onChange={(e)=>setVintage(true)}
                                
                            />
                           Yes, The current product is a Vintage
                        </div>

                        <div>
                            <input
                                className="radio-input"
                                type="radio"
                                name="vintage"
                                value="false"
                                checked={vintage===false}
                                onChange={(e)=>setVintage(false)}
                            />
                        No, The current product is a NOT Vintage
                        </div>
                </div>
            </div>






            <div className="made-to-order">
                <div className="made-to-order-words">
                    <h5 className="vintage-header">Made To Order *</h5>
                    <p className="p-header-listing">Tell the users if the design is custom.</p>
                </div>

                <div className="radio-container">
                        <div>
                            <input
                                className="radio-input"
                                type="radio"
                                name="made-to-order"
                                value="true"
                                checked={madeToOrder===true}
                                onChange={(e)=>setmadeToOrder(true)}
                                
                                
                            />
                           Yes, The product is Made to Order
                        </div>

                        <div>
                            <input
                                className="radio-input"
                                type="radio"
                                name="made-to-order"
                                value="false"
                                checked={madeToOrder===false}
                                onChange={(e)=>setmadeToOrder(false)}
                            />
                        No, The product is NOT Made to Order
                        </div>
                </div>
            </div>


            <div className="descr-container">
                <div className="desc-word">
                  <h5 className="desc-header"> Description *</h5>
                   <p className="p-header-listing">Start with a brief overview that describes your item’s finest features. Shoppers will only see the first few lines of your description at first, so make it count!
                        Not sure what else to say? 
                        <br></br>
                        <br></br>
                        <br></br>
                        Shoppers also like hearing about your process, and the story behind this item.</p>
                </div>

                <textarea className="desc-input"
                    type="text"
                    required
                    minLength={15}
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                />


            </div>



            <div className="creator-container">
                <div className="creator-word">
                    <h5 className="title-header">Creator *</h5>
                    <p className="p-header-listing">Tell the user what the name of your store is.</p>
                </div>

                <input className="title-input"
                    type="text"
                    required
                    value={creator}
                    onChange={(e)=>setCreator(e.target.value)}
                />


            </div>


            <div className="material-container">
                <div className="material-word">
                <h5 className="title-header">Material *</h5>
                    <p className="p-header-listing">Tell the user what your item is composed of.</p>
                </div>

                <input className="title-input"
                    type="text"
                    required
                    value={material}
                    onChange={(e)=>setMaterial(e.target.value)}
                />


            </div>

            <div className="price-container">
                <div className="price-word">
                <h5 className="title-header">Price *</h5>
                <p className="p-header-listing">Be sure to mention the set price</p>
                </div>

                <label className="price-label">
                <i class="fa-solid fa-dollar-sign" style={{color: "#5b6371"}}></i>
                <input className="price-input"
                    type="number"
                    min={0}
                    required
                    value={price}
                    onChange={(e)=>setPrice(e.target.value)}
                />
                </label>


            </div>


           





         </div>

        </div>
        <div className="create-product-button-1-container" >
             <button className="create-product-button-1" type="submit">Create Product</button>
         </div>
    </form>

        </>
    )
}

export default NewProduct