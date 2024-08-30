import React from "react";
import "./footer.css";
import { assets } from "../../assets/assets";

const footer = () => {
  return (
    <div className="footer">

        <div className="footer_top">
            <div className="footer_icon">
                <h1>WEBSITE</h1>
            </div>

            <div className="footer_contact">

                <div className="footer_icon">
                    <img src={assets.Facebook} alt="" />
                    <img src={assets.Insta} alt="" />
                    <img src={assets.x} alt="" />
                </div>

                <div className="footer_link">
                    <a href="">Example@Example.tv</a>
                    <a href="">+6462826618618</a>
                </div>
                
            </div>

            
        </div>

        <div className="footer_bottom">
            <div className="Footer_c">
                <p>© 2024 Test Street Editors</p>
            </div>
            <div className="Footer_Privacy">
                <p>Privacy Policy</p>
            </div>
        </div>
    
    </div>
  );
};

export default footer;
