import React from "react";

const Landing = () => {
  const imageStyle = {
    width: "100%", 
    height: "700px", 
    backgroundImage: "./LandingImg/landingimg.png", 
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
   
  };
  return (
    <div>
      <img src="./LandingImg/landingimg.png" alt="Airplane" style ={imageStyle} />
    </div>
  );
};

export default Landing;