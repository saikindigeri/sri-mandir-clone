// src/components/ProfilePopup.js
import React from 'react';
import './index.css';


import { Link } from 'react-router-dom';


const ProfilePopup = ({ onMyPoojaBookings }) => {
  return (
    <div className="profile-popup">
      <div className="greeting">Hello, Sri Mandir Bhakt</div>
      <div className="account-details">
        <h3>Account Details</h3>
        <ul>
          <li><Link to="/my-profile" onClick={() => { /* Navigate to My Profile */ }}>My Profile</Link></li>
          <li><Link to="/my-pooja-bookings" onClick={onMyPoojaBookings}>My Pooja Bookings</Link></li>
          <li><Link to="/my-ramostav-bookings" onClick={() => { /* Navigate to My Ramostav Bookings */ }}>My Ramostav Bookings</Link></li>
          <li><Link to="/book-puja" onClick={() => { /* Navigate to Book a Puja */ }}>Book a Puja</Link></li>
        </ul>
      </div>
      <div className="help-support">
        <h3>Help & Support</h3>
        <p>For puja booking, contact us:</p>
        <p>WhatsApp: +91-1234567890</p>
        <p>Email: support@srimandir.com</p>
      </div>
    </div>
  );
};

export default ProfilePopup;
