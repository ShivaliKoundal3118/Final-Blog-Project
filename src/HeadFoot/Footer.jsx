import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { TiSocialYoutube } from "react-icons/ti";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
    <div className='footer-path'>
        <div>
            <h3>COMPANY</h3><br/>
            <p>
                Blog</p>
            <p>Privacy Policy</p>
            <p>FAQ's</p>
            <p>Contact</p>
        </div>
        <div>
            <h3>Contact Us</h3><br/>
            <p>Tel. +32 5044 46 46</p>
            <p>FAX +32 5044 46 46</p>
            <p>toerisme@brugge.be</p>
        </div>
        <div>
            <h3>QUICK LINK</h3><br/>
            <p>Style Guide</p>
            <p>Career</p>
            <p >Help Text</p>
        </div>
        <div>
            <h3>SOCIAL SHARE</h3><br/>
           <div className='icons'><FaInstagram size={30} />
            <FaTwitter size={30} />
            <CiFacebook size={30} /> 
           <TiSocialYoutube size={30} /></div>  
        </div>
    </div>
    
    
    </>
  )
}

export default Footer
