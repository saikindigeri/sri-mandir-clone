// src/components/BookingDetails.js
import React, { useState } from 'react';
import './index.css';


const BookingDetails = () => {
  const [step, setStep] = useState(1);
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [poojaDetails, setPoojaDetails] = useState({
    name: 'Sample Pooja',
    price: '1000',
    location: 'Temple Location',
    date: '2024-07-19'
  });

  const handleNext = () => {
    setStep(2);
  };

  const handleProceedToBook = () => {
    alert('Proceeding to book the puja');
  };

  return (
    <div className="booking-details">
      {step === 1 && (
        <div className="booking-step">
          <h2>Fill your details for Puja</h2>
          <label>
            Enter Your Whatsapp Mobile Number:
            <input
              type="text"
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
              placeholder="WhatsApp Number"
            />
          </label>
          <label>
            Enter Your Name:
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Your Name"
            />
          </label>
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div className="review-booking">
          <h2>Review Booking</h2>
          <p>Pooja: {poojaDetails.name}</p>
          <p>Price: {poojaDetails.price}</p>
          <p>Total Amount: {poojaDetails.price}</p>
          <button onClick={handleProceedToBook}>Proceed to Book</button>
        </div>
      )}

      {step === 3 && (
        <div className="finalize-booking">
          <h2>Finalize Booking</h2>
          <label>
            Your WhatsApp Number:
            <input type="text" placeholder="Your WhatsApp Number" />
          </label>
          <label>
            Name of Member Participating:
            <input type="text" placeholder="Name of Member" />
          </label>
          <label>
            Participant's Gotra:
            <input type="text" placeholder="Participant's Gotra" />
          </label>
          <h3>Do you want to get puja prasad?</h3>
          <button>Yes</button>
          <button>No</button>
          <p>Prasad of worship will be sent within 8-10 days after completion of puja.</p>
          <button onClick={handleProceedToBook}>Proceed to Book</button>
          <div className="booking-summary">
            <p>Pooja: {poojaDetails.name}</p>
            <p>Location: {poojaDetails.location}</p>
            <p>Date: {poojaDetails.date}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingDetails;
