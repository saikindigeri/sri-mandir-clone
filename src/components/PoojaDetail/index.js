// src/components/PoojaDetail.js
import React, { useState } from 'react';
import './index.css';

const PoojaDetail = ({ pooja }) => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [step, setStep] = useState(1);
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [customerName, setCustomerName] = useState('');

  const handlePackageClick = (packageInfo) => {
    setSelectedPackage(packageInfo);
  };

  const handleNext = () => {
    setStep(2);
  };

  const handleProceedToBook = () => {
    alert('Proceeding to book the puja');
  };

  return (
    <div className="pooja-detail">
      <img src="/assets/images/pooja-detail.jpg" alt="Pooja Detail" />
      <h2>{pooja}</h2>
      <p>Description of {pooja}</p>
      <button onClick={() => setStep(3)}>Select Puja Package</button>

      {step === 3 && (
        <div className="package-selection">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="package-item">
              <h3>Package {index + 1}</h3>
              <p>Description of package {index + 1}</p>
            </div>
          ))}
          <div className="package-options">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="package-option">
                <h4>Package {index + 1}</h4>
                <p>Price: ${100 + index * 50}</p>
                <button onClick={() => handlePackageClick(`Package ${index + 1}`)}>Participate</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedPackage && (
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
              <p>Pooja: {pooja}</p>
              <p>Price: ${100}</p>
              <p>Total Amount: ${100}</p>
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
                <p>Pooja: {pooja}</p>
                <p>Location: Temple Location</p>
                <p>Date: Date</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PoojaDetail;
