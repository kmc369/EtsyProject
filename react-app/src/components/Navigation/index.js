import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { useDispatch } from "react-redux";
import Landing from '../Landing';
import { useHistory } from 'react-router-dom';

function Navigation({ isLoaded }){
	const dispatch = useDispatch()
	const sessionUser = useSelector(state => state.session.user);
	const [search,setSearch]= useState("")
	
	const history = useHistory()


	const handlesubmit = (e) =>{

		e.preventDefault()
		if(search==="" || search==="%" || search==="#"){
		
			return history.push("/")
		}
	

		 history.push(`/search/${search}`)
	
	
	}
	

	



	return (
		<>
		<div className='nav-container'>
				<div className='home-link-container'>
					<NavLink className='home-link' exact to="/">Vetsy</NavLink>
				</div>
			
				
				<form  onSubmit={handlesubmit} className='search-label'>
					<label  >
						<input 
						type='text'
						value={search}
						onChange={(e)=>setSearch(e.target.value)}
						className='search-input'
						placeholder='Search for anything'
						/>
						<i class="fa-solid fa-magnifying-glass" style={{color: "#000000"}}></i>
					</label>
					</form>

				

		<div className='cart-con'>
			{isLoaded && (
			
					<ProfileButton user={sessionUser} />
					
				
			)}
			</div>
			{sessionUser &&
			<div className='cart-con'><i class="fa-sharp fa-solid fa-cart-shopping" style={{color:"rgb(162, 162, 162)",fontSize:"20px",cursor:"pointer"}} onClick={()=>{ history.push(`/shopping_cart/${sessionUser.shopping_cart.id}/user/${sessionUser.id}`)}}></i> </div>
			}
			{/* <div><i class="fa-regular fa-heart"style={{color:"rgb(162, 162, 162)",fontSize:"20px"}}></i></div>
			<div><i class="fa-regular fa-bell"style={{color:"rgb(162, 162, 162)",fontSize:"20px"}}></i></div> */}
		</div>

	
    	
  	






	</>
	
	);
}

export default Navigation;