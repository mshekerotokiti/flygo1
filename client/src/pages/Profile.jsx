import React from "react";
import Header from "../components/Header";
import CurrentBookings from "../components/CurrentBookings";
import PreviousBookings from "../components/PreviousBookings";
import ReviewsForm from "../components/ReviewsForm";
import YourReviews from "../components/YourReviews";

function Profile(){
  return(
    <div>
      <Header />
      <CurrentBookings />
      <PreviousBookings />
      <YourReviews />
      <ReviewsForm />
    </div>
  );
}

export default Profile;