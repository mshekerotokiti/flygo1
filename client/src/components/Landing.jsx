import React, {useState} from "react";

const Landing = () => {
  const imageStyle = {
    width: "100%", 
    height: "700px", 
    // backgroundImage: "./LandingImg/landingimg.png", 
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "contain",
   
  };

  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform search or booking logic here
    // You can use the form data (origin, destination, departureDate) to make API requests or handle the data as needed

    // Reset form fields
    setOrigin('');
    setDestination('');
    setDepartureDate('');
  };
  return (
       <div className="form-container">
         <img src="./LandingImg/landingimg.png" alt="Airplane" style ={imageStyle} />
      <form onSubmit={handleSubmit}>
        <label>
          Origin:
          <input
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
        </label>
        <br />
        <label>
          Destination:
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </label>
        <br />
        <label>
          Departure Date:
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </label>
        <br />
        <button className="search-flights"
       type="submit">Search Flights</button>
      </form>

    </div>
  );
};

export default Landing;