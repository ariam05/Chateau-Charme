import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Discover Your Perfect Home Ambiance with Our Stunning Decor Collection. From Timeless Classics to Modern Trends, Explore an Array of Pieces to Elevate Every Corner of Your Space.</p>
            <dic className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </dic>
            </div>
            
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1 415-339-0929</li>
                    <li>company@gmail.com</li>
                </ul>
            </div>
        </div>

        <hr />
        <p className="footer-copyright">Copyright 2024 @Château Charme All Right Reserved</p>
    </div>
  )
}

export default Footer