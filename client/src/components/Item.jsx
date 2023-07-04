import React from "react";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const BookingItem = () => {
  const [booking, setBooking] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Fetch booking details from the backend API
    const fetchBooking = async () => {
      try {
        const response = await fetch(`/api/bookings/${id}`);
        const data = await response.json();
        setBooking(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBooking();
  }, [id]);

  if (!booking) {
    return <div>Loading...</div>;
  }
  
  return(
    <div>
      <h1>This is the item section of the booking item page</h1>
      <h2>Booking Details</h2>
      <h3>{booking.user}</h3>
      <p>{booking.flight}</p>
    </div>
  );
}

export default BookingItem;