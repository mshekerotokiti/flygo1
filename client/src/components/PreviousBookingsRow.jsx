import React from 'react';
import './PreviousBookingRow.css';

const PreviousBookingRow = ({ date, from, to, price, departureTime, arrivalTime, airport }) => {
  return (
    <tr className="booking-row">
      <td>{date}</td>
      <td>{from}</td>
      <td>{to}</td>
      <td>{price}</td>
      <td>{departureTime}</td>
      <td>{arrivalTime}</td>
      <td>{airport}</td>
    </tr>
  );
};

export default PreviousBookingRow;
