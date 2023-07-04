import React from 'react';
import Landing from '../components/Landing';
import About from '../components/About';
import AirportSection from '../components/AirportSection';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';


function Home(){
  return(
    <div>
      <Landing />
      <About />
      <AirportSection />
      <Reviews />
      <Footer />
    </div>
  );
}


export default Home;
