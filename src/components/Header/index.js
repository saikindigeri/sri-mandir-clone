import React, { useState } from 'react';



import { Link, useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";


import './index.css';
const Header = ({ onProfileClick }) => {
const navigate=useNavigate()

  const handleLogo=()=>{
    navigate("/")
  }
  return (
    <header>
      <nav className='nav-con'> 
        <div  onClick={handleLogo} className='logo-con'>
          <img src="https://res.cloudinary.com/dyjmh036b/image/upload/v1721443980/Screenshot_2024-07-20_082233_ijoger.png" alt='ram-mandir' className='logo' />
          <h2>Sri Mandir</h2>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/pooja">Puja</Link></li>
          <li><Link to="/panchang">Panchang</Link></li>
          <li><Link to="/temples">Temples</Link></li>
          <li><Link to="/library">Library</Link></li>
         
        </ul>
        <div className='option-con'>
          <select>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        <li onClick={onProfileClick}>
          <CgProfile className='profile-logo' size={40} />
          </li>
        </div>
      
      </nav>
    </header>
  );
};

export default Header;
