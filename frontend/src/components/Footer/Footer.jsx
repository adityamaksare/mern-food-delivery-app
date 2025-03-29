import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.footer_logo} alt="" style={{ width: "173px" }} />
          <p>
            "Foodie brings your favorite meals right to your doorstep with
            speed, freshness, and flavor. Whether you're craving local delights
            or gourmet cuisine, we connect you with the best restaurants in
            town. With an easy-to-use platform and seamless ordering experience,
            Foodie makes every meal convenient and satisfying. Order now and let
            your cravings guide you!"
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
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
            <li>+911234576890</li>
            <li>viditsahu@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright {currentYear} &copy; Vidit Sahu - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
