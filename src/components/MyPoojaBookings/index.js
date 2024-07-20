// src/components/MyPoojaBookings.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyPoojaBookings = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/pooja');
  };

  return (
    <div className="my-pooja-bookings">
      <h2>No Puja has been booked yet</h2>
      <p>Book your Puja online at Popular Temples of India. Panditji will take sankalp with your name and gotra during the Puja</p>
      <button onClick={handleBookNow}>Book Pooja Now</button>
    </div>
  );
};

export default MyPoojaBookings;
