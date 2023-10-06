import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom/";

import './footer.css'
function Footer(){
    const history = useHistory()

    return (
        <>
          <div className="extra-stuff">
          <div className="footer-etsy">
            <i class="fa-solid fa-globe" style={{color:"black"}}> </i>
            <div className="powered">Etsy is powered by 100% renewable electricity.</div>
            </div>

          <div className="footer-container">
            <div className="fetsy-download">
                <div className="Fetsy-app" onClick={()=>{history.push('/')}}>Fetsy</div>
                <div className="download-word" onClick={()=>{history.push('/')}} >Download the Fetsy App</div>
            </div>

            <div className="shop-contact">
              <div className="contact-us">Contact us </div>
              <div className="socials">
                <a href="https://www.linkedin.com/in/keisha-coleman-1657bb1b4/"className="linkedIn"><i class="fa-brands fa-linkedin"style={{fontSize:"30px"}}></i> linkedIn</a>
                <a href="https://github.com/kmc369" className="gitHub" ><i class="fa-brands fa-github"  style={{fontSize:"30px"}}></i> GitHub</a>
                <a href="https://twitter.com/elonmusk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className="Twitter"> <i class="fa-brands fa-twitter" style={{fontSize:"30px"}}></i>Twitter</a>
              </div>
            </div>
          </div>
      </div>
        
        </>
    )
}

export default Footer