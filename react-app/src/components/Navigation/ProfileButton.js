import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import * as sessionActions from '../../store/session'
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
          
          <div className="div-list1"><img src={user.image} alt="userimage" style={{height:"30px", width:"30px",borderRadius:"19px",paddingBottom:"3px"}} onClick={()=>history.push(`/userProfile/${user.id}`)}/><li className="list-item">{user.username}</li></div>
          <div className="div-list"><li className="list-item">{user.email}</li></div>
           <div className="div-list"><li className="list-item" onClick={()=>history.push(`/userProfile/${user.id}`)}>Manage Spots</li></div> 
            <div className="div-list"><li className="list-item">
              <button className="logoutButton" onClick={handleLogout}>Log Out</button>
            </li></div>
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
          Demo Login
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
