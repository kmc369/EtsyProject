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
                    <input className='input-image' type="file" accept="image/*"/>
                    <input className='input-image' type="file" accept="image/*"/>
                    <input className='input-image' type="file" accept="image/*"/>
                    <input className='input-image' type="file" accept="image/*"/>
                    <input className='input-image' type="file" accept="image/*"/>

                </div>
            </div>
        </div>


    </div>

        </>
    )
}

export default NewProduct