import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>Mahotsav</h1>
          <p>Events and Weddings</p>
        </div>
        <div className="tag">
          <label>News and Updates</label>
          <div>
            
            <button>Subscribe</button>
          </div>
          <p>Enter your email address to subscribe and receive regular news and updates!</p>
        </div>
       
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mahotsav. All rights reserved.</p>
      </div>
      </div>
  
    </footer>
  );
};

export default Footer; 
