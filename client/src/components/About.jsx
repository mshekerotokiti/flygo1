import React from "react";
import image from "../images/aeroplane.jpg";
import "./AboutStyle.css";


function About(){
  return(
    <div className="about-section">
    <div className="image-container">
      <img src={image} alt="About" />
    </div>
    <div className="content-container">
      <h2>Travel Any Corner of The World With Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis nisi id nisi ultrices tempus. Nulla et justo vitae dolor porta vestibulum. Donec sollicitudin faucibus ultricies. Fusce consectetur, risus at volutpat mattis, sem nunc aliquet nunc, vitae volutpat ex sapien vitae ipsum.
      </p>
      <div className="button-container">
        <button className="contact-button">Contact us</button>
      </div>
    </div>
  </div>
  );
}


export default About;