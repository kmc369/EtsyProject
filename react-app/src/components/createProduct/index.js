import React, { useEffect, useState } from "react";
import "./createProduct.css"
function NewProduct() {

    return (
        <>
    <div className="create-listing-container">
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
                        <div><i class="fa-solid fa-camera" style={{"color": "#121416;"}}></i></div>
                        <div>Add a photo</div>
                        </label>
                    
                    <input type="file" id="file-input" className="input-image1" accept="image/*" />
                    </div>

                    <div>
                    <label className='custom-file-input-label' htmlFor="file-input">
                        <i class="fa-solid fa-camera" style={{"color": "#121416;"}}></i>
                        <div>Add a photo</div>
                    </label>
                    <input type="file" id="file-input" className="input-image1" accept="image/*" />
                    </div>

                    <div>
                    <label className='custom-file-input-label' htmlFor="file-input">
                    <i class="fa-solid fa-camera" style={{"color": "#121416;"}}></i>
                    <div>Add a photo</div>
                        
                    </label>
                    <input type="file" id="file-input" className="input-image1" accept="image/*" />
                    </div>

                    <div>
                    <label className='custom-file-input-label' htmlFor="file-input">
                    <i class="fa-solid fa-camera" style={{"color": "#121416;"}}></i>
                        <div>Add a photo</div>
                    </label>
                    <input type="file" id="file-input" className="input-image1" accept="image/*" />
                    </div>    

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
                type="text"
            
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
                            />
                           Yes, The current product is handmade
                        </div>

                        <div>
                            <input
                                className="radio-input"
                                type="radio"
                                name="handmade"
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
                                
                            />
                           Yes, The current product is a Vintage
                        </div>

                        <div>
                            <input
                                className="radio-input"
                                type="radio"
                                name="vintage"
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
                                name="vintage"
                                
                            />
                           Yes, The product is Made to Order
                        </div>

                        <div>
                            <input
                                className="radio-input"
                                type="radio"
                                name="vintage"
                            />
                        No, The product is NOT Made to Order
                        </div>
                </div>
            </div>


            <div className="creator-container">
                <div className="creator-word">
                    Creator 
                </div>

                <input className="creator-input"
                    type="text"
                />


            </div>


         </div>

        </div>


    </div>

        </>
    )
}

export default NewProduct