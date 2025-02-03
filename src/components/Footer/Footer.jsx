import React from 'react'
import './Footer.css'
import profile_img from '../../assets/passpic.png'
import footer_logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'


const   Footer = () =>{
    return(
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img className='logo' src={footer_logo} alt="" />
                    <p>Thank you for visiting! Stay updated with my latest projects and never miss out—subscribe for more!</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">
                        Subscribe
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                    <p className="footer-bottom-left">
                        © 2025 CH Sudhamsh . All rights reserved.
                    </p>
                    <div className="footer-bottom-right">
                        <p>Term of Services</p>
                        <p>Privacy Policy</p>
                        <p>Connect with me</p>
                    </div>
                </div>
        </div>
    )
}

export default Footer