import React from 'react';
import Landing from '../components/Landing';
import About from '../components/About';
// import AirportCard from '../components/AirportCard';
import AirportSection from '../components/AirportSection';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';


function Home(){
  return(
    <div>
      <Landing />
      <About />
      <AirportSection />
      {/* <AirportCard image={null} rating={5} name={"JKIA"}/> */}
      <Reviews />
      <Footer />
    </div>
  );
}


export default Home;
