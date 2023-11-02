import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import * as sessionActions from '../../store/session'
import './Navigation.css';
function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const history = useHistory()


  const handleClick = () => {
    
      const email = "olivia@aa.io"
      const password = "password"

   
    // closeModal()
    return dispatch(sessionActions.login(email,password))
  }

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = (e) => {
    e.preventDefault();
    history.push('/')
    dispatch(logout());
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <>
     <button className ="user-button"onClick={openMenu}>
      <i class="fa-regular fa-user"></i>  
        </button>
      <ul className={ulClassName} ref={ulRef} >
        {user ? (
          <>
         
          <div className="div-list1"><img src={user.image} alt="userimage" style={{height:"24px", width:"24px",borderRadius:"19px",paddingBottom:"3px",marginRight:"5px"}} onClick={()=>history.push(`/userProfile/${user.id}`)}/><li className="list-item">{user.username}</li></div>
          <div className="div-list"><li className="list-item"  style={{fontFamily:"sans-serif", fontWeight:"lighter"}} onClick={()=>history.push(`/userProfile/${user.id}`)}>{user.email}</li></div>
           <div className="div-list"><li className="list-item" onClick={()=>history.push(`/userProfile/${user.id}`)} style={{fontFamily:"sans-serif", fontWeight:"lighter"}}>Manage Products</li></div> 
            <div className="div-list2"><li className="list-item" style={{fontFamily:"sans-serif", fontWeight:"lighter"}} onClick={handleLogout}>
          Log Out</li></div>
          </>
        ) : (
          <>
            <div className="login-signup-container">
              <div></div>
            <OpenModalButton
              className="login-button"
              buttonText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />

          <button onClick={handleClick}   className="login-button">
             View as Demo
          </button>
          

            <OpenModalButton
              className="signUp-button"
              buttonText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
            </div>
          </>
        )}
      </ul>
    </>
  );
}

export default ProfileButton;
