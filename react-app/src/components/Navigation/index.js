import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);
	const [search,setSearch]= useState("")
	return (
		<div className='nav-container'>
				<div className='home-link-container'>
					<NavLink className='home-link' exact to="/">Fetsy</NavLink>
				</div>
			

					<label className='search-label'>
						<input 
						type='text'
						value={search}
						onChange={(e)=>setSearch(e.target.value)}
						className='search-input'
						placeholder='Search for anything'
						/>
						<i class="fa-solid fa-magnifying-glass" style={{color: "#000000"}}></i>
					</label>

				

		<div className='profile-icon'>
			{isLoaded && (
			
					<ProfileButton user={sessionUser} />
					
				
			)}
			</div>
			<div><i class="fa-sharp fa-solid fa-cart-shopping" style={{color:"rgb(162, 162, 162)",fontSize:"20px"}}></i> </div>
			<div><i class="fa-regular fa-heart"style={{color:"rgb(162, 162, 162)",fontSize:"20px"}}></i></div>
			<div><i class="fa-regular fa-bell"style={{color:"rgb(162, 162, 162)",fontSize:"20px"}}></i></div>
		</div>
	
	);
}

export default Navigation;