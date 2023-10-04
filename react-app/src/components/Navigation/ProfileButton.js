import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

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
          
          <div className="div-list1"><img src={user.image} alt="userimage" style={{height:"30px", width:"30px",borderRadius:"19px",paddingBottom:"3px"}}/><li className="list-item">{user.username}</li></div>
          <div className="div-list"><li className="list-item">{user.email}</li></div>
           <div className="div-list"><li className="list-item">Manage Spots</li></div> 
            <div className="div-list"><li className="list-item">
              <button className="logoutButton" onClick={handleLogout}>Log Out</button>
            </li></div>
          </>
        ) : (
          <>
            <OpenModalButton
              buttonText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />

            <OpenModalButton
              buttonText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
          </>
        )}
      </ul>
    </>
  );
}

export default ProfileButton;
