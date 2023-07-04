import React from "react";
import StarRatings from 'react-star-ratings';
import './AirportCard.css';

function AirportCard({image, rating, name}) {
  return(
    <div className="airport-card">
      <img className="airport-card__image" src={image} alt={name} />
      <div className="airport-card__name">{name}</div>
      <div className="airport-card__rating">
        <StarRatings
          rating={parseFloat(rating)}
          starDimension="20px"
          starSpacing="2px"
          starRatedColor="gold"
        />
      </div>
    </div>
  );
}



export default AirportCard;