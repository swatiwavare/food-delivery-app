// Footer.jsx
import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer id="contact-us" className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h2 className="logo">Tomato.</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>

          <div className="social-icons">
            <img src={assets.facebook_icon} />
            <img src={assets.linkedin_icon} />
            <img src={assets.twitter_icon} />
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-center">
          <h3>COMPANY</h3>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h3>GET IN TOUCH</h3>
          <p>+1-212-456-7890</p>
          <p>contact@tomato.com</p>
        </div>
      </div>

      <hr />

      <p className="copyright">
        Copyright 2024 © Tomato.com - All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
