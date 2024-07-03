import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/background.jpg" alt="ERROR 404" />
      <div className="item">
      
      <h3>Memorable Moments Makers </h3>
        <div>
          <h1>Your Personal Dream Artisan</h1>
          <p>
          We specialize in shaping ambitious visions and refining intricate details!
          </p>  
          <Link to="contact" spy={true} smooth={true} duration={500}>
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;