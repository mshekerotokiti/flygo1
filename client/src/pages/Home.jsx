import React from 'react';
import Landing from '../components/Landing';
import About from '../components/About';
import AirportCard from '../components/AirportCard';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';


function Home(){
  return(
    <div>
      <Landing />
      <About />
      <AirportCard />
      <Reviews />
      <Footer />
    </div>
  );
}


export default Home;
