import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import './Landing.css'
import * as ProductActions from '../../store/products'


function Landing () {
const dispatch = useDispatch()

useEffect(()=>{
    const products = async() =>{
        await dispatch(ProductActions.getAllProductThunk())
    }
    products()
},[dispatch])
return (
    <>
    <h1>return Landing</h1>

    
    </>
)
}


export default Landing