// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import ProfilePopup from './components/ProfilePopup';
import Home from './components/Home';
import PoojaSection from './components/PoojaSection';
import MyPoojaBookings from './components/MyPoojaBookings';
import PageUnderConstruction from './components/PageUnderConstruction';
import './App.css';

const App = () => {
  const [showProfilePopup, setShowProfilePopup] = useState(false);

  const toggleProfilePopup = () => {
    setShowProfilePopup(!showProfilePopup);
  };

  const handleNavigation = () => {
    setShowProfilePopup(false); // Close the profile popup on navigation
  };

  return (
    <Router>
      <div>
        <Header onNavigate={handleNavigation} onProfileClick={toggleProfilePopup} />
        {showProfilePopup && (
          <ProfilePopup onMyPoojaBookings={() => setShowProfilePopup(false)} />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pooja" element={<PoojaSection />} />
          <Route path="/my-pooja-bookings" element={<MyPoojaBookings />} />
          <Route path="/panchang" element={<PageUnderConstruction />} />
          <Route path="/temples" element={<PageUnderConstruction />} />
          <Route path="/library" element={<PageUnderConstruction/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
