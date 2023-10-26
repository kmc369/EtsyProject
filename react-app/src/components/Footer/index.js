import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom/";

import './footer.css'
function Footer(){
    const history = useHistory()

    return (
        <>
        <div className="footer-entire-container">
          <div className="extra-stuff">
          <div className="footer-etsy">
            <i class="fa-solid fa-globe" style={{color:"black"}}> </i>
            <div className="powered">Vetsy is powered by 100% renewable electricity.</div>
            </div>

          <div className="footer-container">
            <div className="fetsy-download">
                <div className="Fetsy-app" onClick={()=>{history.push('/')}}>Vetsy</div>
                <div className="download-word" onClick={()=>{history.push('/')}} >Download the Vetsy App</div>
            </div>

            <div className="shop-contact">
              <div className="contact-us"><u>Contact us</u> </div>
              <div className="socials">
                <a href="https://www.linkedin.com/in/keisha-coleman-1657bb1b4/"className="linkedIn"><i class="fa-brands fa-linkedin"style={{fontSize:"20px"}}></i> linkedIn</a>
                <a href="https://github.com/kmc369" className="gitHub" ><i class="fa-brands fa-github"  style={{fontSize:"20px"}}></i> GitHub</a>
                <a href="https://twitter.com/elonmusk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className="Twitter"> <i class="fa-brands fa-twitter" style={{fontSize:"20px"}}></i>Twitter</a>
              </div>
            </div>

      {/* <div className="extra-information-all">
        <div className="extra-information-shop">
        <div style={{marginBottom:"10px", fontSize:"15px"}}><u>Shop</u></div>
        <div>Gift cards</div>
        <div>Etsy Registry</div>
        <div>Sitemap</div>
        <div>Etsy blog</div>
    
        </div>

          <div className="extra-information-seller">
          <div style={{marginBottom:"10px", fontSize:"15px"}}><u>Sell</u></div>
        
          <div>Seller handbook</div>
          <div>Teams</div>
          <div>Forums</div>
          <div>Affiliates & Creators</div>
          </div>

          <div className="extra-information-about">
          <div style={{marginBottom:"10px", fontSize:"15px"}}><u>About</u></div>
        
          <div>Etsy, Inc.</div>
          <div>Policy</div>
          <div>Investors</div>
          <div>Careers</div>
          </div>

          <div className="extra-information-help">
          <div style={{marginBottom:"10px", fontSize:"15px"}}><u>About</u></div>
        
          <div>Help Center</div>
          <div>Privacy settings</div>
        
          </div>
         

      </div> */}
      </div>
      </div>
      </div>
        
        </>
    )
}

export default Footer