import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const BookingItem = () => {
  const [booking, setBooking] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Simulating fetching booking details from an API
    const fetchBooking = async () => {
      try {
        // Simulated API response
        const response = await new Promise(resolve => {
          setTimeout(() => {
            resolve({
              user: "John Doe",
              flight: "Flight ABC123"
            },
            {
              id: 2,
              user: "Christine",
              airport: "Airport XYZ"
            });
          }, 100); // Simulate delay
        });
        
        setBooking(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBooking();
  }, []);

  if (!booking) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <h1>This is the item section of the booking item page</h1>
      <h2>Booking Details</h2>
      <h3>{booking.user}</h3>
      <p>{booking.flight}</p>
    </div>
  );
}

export default BookingItem;
