// src/components/PoojaBookings.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const PoojaBookings = () => {
  const navigate = useNavigate();

  const handleBookPoojaClick = () => {
    navigate('/pooja');
  };

  return (
    <div className="pooja-bookings">
      <h2>No Puja has been booked yet</h2>
      <p>Book your Puja online at Popular Temples of India. Panditji will take sankalp with your name and gotra during the Puja.</p>
      <button onClick={handleBookPoojaClick}>Book Pooja Now</button>
    </div>
  );
};

export default PoojaBookings;
