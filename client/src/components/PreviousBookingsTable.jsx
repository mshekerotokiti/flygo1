import React from 'react';
import './PreviousBookingsTable.css';
import PreviousBookingRow from './PreviousBookingRow';

const PreviousBookingsTable = ({ bookings }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>From</th>
          <th>To</th>
          <th>Price</th>
          <th>Departure Time</th>
          <th>Arrival Time</th>
          <th>Airport</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map((booking, index) => 
          <PreviousBookingRow key={index} {...booking} />
        )}
      </tbody>
    </table>
  );
};

export default PreviousBookingsTable;