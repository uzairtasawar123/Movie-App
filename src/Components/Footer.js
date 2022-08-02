import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
    
      <footer className='fixed-bottom' style={{backgroundColor:'dark', border:'1px solid grey'}}>
        <span className='footer_span'> @MovieApp 2022</span>
        <p>This is the best Website to find out your Favorite Movies</p>
        <span className='footer_span'>
        <i className="fa-brands fa-facebook mx-2"></i>
        <i className="fa-brands fa-instagram mx-2"></i>
        <i className="fa-brands fa-twitter mx-2"></i>
        </span>
      </footer>
      
    </div>
  );
};

export default Footer;
