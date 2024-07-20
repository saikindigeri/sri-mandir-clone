// src/components/PujaDetailPopup.js
import React, { useState } from 'react';
import './index.css'; // Import CSS for styling



const PujaDetailPopup = ({ pooja, onClose }) => {
  const [step, setStep] = useState(1);
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [name, setName] = useState('');
  const [participantName, setParticipantName] = useState('');
  const [participantGotra, setParticipantGotra] = useState('');
  const [prasad, setPrasad] = useState('No');

  const handleNext = () => {
    if (step === 1 && whatsappNumber && name) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      setStep(4);
    }
  };

  const handleProceed = () => {
    // Implement the logic to finalize the booking
    alert('Puja booked successfully!');
    onClose();
  };

  return (
    <div className="puja-detail-popup">
      <div className="popup-content">
        {step === 1 && (
          <>
            <h2>Fill your details for Puja</h2>
            
            <div className="input-group">
            <label>Enter Your Whatsapp Mobile Number</label>
              <input
                type="text"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                placeholder="Your Whatsapp Number"
              />
            </div>
            <div className="input-group">
              <label>Enter your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
              />
            </div>
            <button className='nextbutton' onClick={handleNext} disabled={!whatsappNumber || !name}>Next</button>
          </>
        )}
        



      

        {step === 2 && (
          <>
            <h2>Review Booking</h2>
            <p>Pooja Name: {pooja}</p>
            <p>Price: [Price]</p>
            <div className="billing-details">
              <p>Total Amount: [Total Amount]</p>
            </div>
            <button onClick={handleNext}>Continue</button>
          </>
        )}

        {step === 3 && (
          <>
            <h2>Finalize Booking</h2>

            <div className='whole-con'>
            <div className='left-con'>
      <div className="input-group">
              <label>Your Whatsapp Number</label>
              <input
                type="text"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                placeholder="Your Whatsapp Number"
              />
            </div>
            <div className="input-group">
              <label>Name of Member Participating in Puja</label>
              <input
                type="text"
                value={participantName}
                onChange={(e) => setParticipantName(e.target.value)}
                placeholder="Participant Name"
              />
            </div>
            <div className="input-group">
              <label>Participant's Gotra</label>
              <input
                type="text"
                value={participantGotra}
                onChange={(e) => setParticipantGotra(e.target.value)}
                placeholder="Participant's Gotra"
              />
            </div>
            <div className="prasad-option">
              <h3>Do you want to get puja prasad?</h3>
              <button onClick={() => setPrasad('Yes')}>Yes</button>
              <button onClick={() => setPrasad('No')}>No</button>
              <p>Prasad of worship will be sent within 8-10 days after completion of puja</p>
            </div>
            <button onClick={handleProceed}>Proceed to Book</button>
      </div>
            <div className="booking-summary">
              <p>Pooja Name: {pooja}</p>
              <p>Location: [Location]</p>
              <p>Time: [Time]</p>
            </div>
            </div>
   
          </>
        )}

        <button className="close-popup" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PujaDetailPopup;
