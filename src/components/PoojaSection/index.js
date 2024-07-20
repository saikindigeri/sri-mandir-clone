// src/components/PoojaSection.js
import React, { useState } from 'react';

import './index.css';
import Carousel from '../Carousel';

import { GiTempleGate } from "react-icons/gi";
import { FaCalendarDay } from "react-icons/fa";
// src/components/PoojaSection.js

import PujaDetailPopup from '../PujaDetailPopup';


const PoojaSection = () => {
  const [selectedPooja, setSelectedPooja] = useState(null);
  const [showPackages, setShowPackages] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const poojas = [
    { id: 1, name: 'Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek', description: 'For Prevention of Misfortunes and Adversities', image: '/assets/images/pooja1.jpg',location:"Shree Shanidev Temple, Shani Shingnapur, Maharashtra",time:"20 July, Saturday, Ashadha Shukla Chaturdashi" ,image:"https://res.cloudinary.com/dyjmh036b/image/upload/v1721447194/1719660451156_b0wiyv.webp"},
    { id: 2, name: 'Maa Bagalamukhi Tantra Yukta Havan', description: 'for Victory in Court Cases and Victory over Enemies',location:"Maa Bagalamukhi Temple, Haridwar, Uttarakhand",time:"21 July, Sunday, Ashadha Shukla Chaturdashi", image: 'https://res.cloudinary.com/dyjmh036b/image/upload/v1721447319/1721208697893_mnccum.webp' },
  {id:3,name:"Divya Mahakali Tantrokta Havan",description:"For Courage and Protection from Obstacles",location:"Shaktipeeth Maa Tarapith Temple, Birbhum, West Bengal",time:"20 July, Saturday, Ashadha Shukla Purnima (From 05:59 PM,",image:"https://res.cloudinary.com/dyjmh036b/image/upload/v1721447475/1720890973717_u3iag1.webp"},
  {id:4,name:"1008 Dakshinamurthy Mool Mantra Jaap and Havan and Omkareshwar Rudrabhishek",description:"To Find Purpose and Achieve Stability in Life",location:"Shri Omkareshwar Jyotirlinga Temple , Khandwa, Madhya",time:"21 July, Sunday, Ashadha Shukla Purnima",image:"https://res.cloudinary.com/dyjmh036b/image/upload/v1721447468/1720715854408_iuws1b.webp"},
  {id:5,name:"Rahu-Guru Shanti Special Guru Chandal Dosha Nivaran Mahapuja",description:"For Prosperity and Material Well-Being",location:"Shri Brihaspati Temple, Kashi, Uttar Pradesh",time:"21 July, Sunday, Ashadha Shukla Purnima",image:"https://res.cloudinary.com/dyjmh036b/image/upload/v1721447462/1720715330771_mximp2.webp"},
  {id:6,name:"Satyanarayan Katha and Navagraha Shanti Puja",description:"For Enhancing Material Prosperity and Promoting Emotional Well-Being",location:"Shri Omkareshwar Jyotirlinga Temple, Khandwa, Madhya",time:"21 July, Sunday, Ashadha Shukla Purnima",image:"https://res.cloudinary.com/dyjmh036b/image/upload/v1721447456/1721213800165_uyjzkc.webp"},
  ];


  const packages=[
    {id:1,price:"₹ 851",pooja:"Individual Puja", package:"Package for 1 Person",one:"Pandit ji will call out your name and gotra during the puja sankalp.",two:"Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva, or Deep Daan to be done in your name",three:"Upon completion, a video of your puja and offering will be shared with you on your registered WhatsApp number or can be found in your booking history within 3-4 days.",four:"Sacred Tirth Prasad will be sent to your address within 8-10 days."},
    {id:2,price:"₹ 1251",pooja:"Partner Puja",package:"Package for 2 People",one:"Pandit ji will call out your name and gotra during the puja sankalp.",two:"Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva, or Deep Daan to be done in your name.",three:"Upon completion, a video of your puja and offering will be shared with you on your registered WhatsApp number or can be found in your booking history within 3-4 days.",four:"Upon completion, a video of your puja and offering will be shared with you on your registered WhatsApp number or can be found in your booking history within 3-4 days."},
    {id:3,price:"₹ 2001",pooja:"Family + Bhog",package:"Package for  People",one:"Pandit ji will call out your name and gotra during the puja sankalp.",two:"Bhog consisting of fruits, sweets, and dry fruits will be offered to Shani Dev at Shree Shanidev Temple.",three:"Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva, or Deep Daan to be done in your name.",four:"Upon completion, a video of your puja and offering will be shared with you on your registered WhatsApp number or can be found in your booking history within 3-4 days."},
    {id:4,price:"₹ 3001",pooja:"Joint Family + Bhog + Flower Basket",package:"Package for 4 People",one:"Pandit ji will call out your name and gotra during the puja sankalp.",two:"Bhog consisting of fruits, sweets, and dry fruits will be offered to Shani Dev at Shree Shanidev Temple along with floral tributes",three:"Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva, or Deep Daan to be done in your name.",four:"Upon completion, a video of your puja and offering will be shared with you on your registered WhatsApp number or can be found in your booking history within 3-4 days."}
  ]
  const handleParticipateClick = (pooja) => {
    setSelectedPooja(pooja);
    setShowPackages(true);
  };

  const handlePackageClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setShowPackages(false);
    setSelectedPooja(null);
  };

  return (
    <div className="pooja-section">




    
      {!showPackages && !showPopup && (
        <>
          
<div className='car-container'>
  <h1 className='car-heading'>

  Perform your Puja as per Vedic rituals at Famous Hindu Temples in India with Sri Mandir

      
  </h1>
  <Carousel />
</div>

          <div className="pooja-list">

            <h1 className='upcoming-heading'>Upcoming Pujas on Sri Mandir.</h1>
            <p className='upcoming-des'>Book online puja with Sri Mandir in more than 500+ 
              temples across India. Receive video of the puja along 
              with the Prasad and receive blessings from the divine for prosperity and 
              well-being of you and your family</p>
            {poojas.map(pooja => (
              <div key={pooja.id} className="pooja-item">
                <img className='pooja-image' src={pooja.image} alt={pooja.name} />
                <h3 className='pooja-name'>{pooja.name}</h3>
                <p className='pooja-des'>{pooja.description}</p>
               <div className='logo-des'>
               <GiTempleGate className='icon-pooja'/>
               <p className='pooja-des'>  {pooja.location}</p>
               </div>
              <div className='logo-des'>
              <FaCalendarDay className='icon-pooja' />
              <p className='pooja-des'> {pooja.time}</p>
              </div>
                <button onClick={() => handleParticipateClick(pooja)}>Participate  </button>
              </div>
            ))}
          </div>
        </>
      )}

      {showPackages && !showPopup && (
        <div className="packages-section">

          <div className='package-description'>

          <h2>{selectedPooja.name} - Select Puja Package</h2>
          </div>
          <div className='options-container'>
            <nav>
              <ul>
                <li>
                  <a href="#about-pooja">  About Puja</a>
                
                </li>
              <li><a href="#benefits">Beneftis </a></li>
              <li><a href="#process">Process </a></li>
              <li><a href="#temples">About Temples </a></li>
              <li><a href="#packages">Packages </a></li>
              </ul>
            </nav>

          </div>
          <section className='about-pooja' id="about-pooja">
<h1>Saturday Shani Shingnapur Special Shani 
  Saade Saati Peeda Shanti Mahapuja
   and Til Tel Abhishek for Prevention of Misfortunes and Adversities</h1> 
   <p>The Shani Shingnapur Temple in Maharashtra is considered 
    the world's biggest Shani temple. This temple of Lord Shani is known as the 'Jagrut Devasthan', 
    meaning Shani Dev himself resides here in the form of a stone idol. According to religious beliefs, 
    performing Shani Puja and offering Til Tel at this ancient temple can provide relief from
     the effects of Shani Saade Saati. Shani Saade Saati is often considered unfavourable, with its impact
      divided into three phases of two and a half years each. During the initial phase of Saade Saati, 
      Shani affects the mind of an individual which may cause financial and emotional challenges. 
      The second phase of Saade Saati is considered the most challenging which can bring physical
       troubles. Its consequences can also affect an individual's family and professional life.

In the final phase of Shani Saade Saati, a person may face various struggles,
affecting them physically, mentally, and financially. Various types of worship
 are performed to reduce the malefic effects of Lord Shani, among which Shani Saade 
 Saati Peeda Shanti Mahapuja and Til Tel Abhishek are extremely effective. Just as 
 each deity has a special day, Saturday is dedicated to Lord Shani, and on this day, 
 performing the Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek are
  considered highly fruitful. Therefore, participate in this puja through Sri 
  Mandir and attain the special grace of Lord Shani.</p>
          </section>
          <h1>   puja benefits</h1>
          <section className='puja-benefits' id="benefits">
       
<div>
<h2>Prevention of Misfortunes</h2>
<p>Due to Shani’s affliction in the horoscope,
   individuals experience unfortunate events in their lives. Participating in Shani 
  Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek on
   
Read more</p>

</div>
<div><h2>Relief from Adversities</h2>
<p>Due to the influence of Saturn's affliction, individuals
   often encounter obstacles in all aspects of their lives.
    It is believed that worshipping Shani Dev provides protection
     from obstacles and difficulties. Those who perform this worship 
     </p></div>

<div>
<h2>Freedom from Saade Saati and Choti Dhaiya</h2>
<p>Shani Dhaiya is said to last for two and a half years. 
  Shani Saade Saati and Dhaiya are generally considered
   to be inauspicious and troublesome. Saade Saati Dosha Nivaran 

Read more</p>
</div>
          </section>
          <section className='puja-process' id="process">

          </section>

          <section className='temple-details' id="temples">

          </section>
          <h1>Select puja package</h1> 
          <section className="package-list" id="packages">
           
            <div className='package-con'>
            {packages.map(eachpackage=>(
        <div className='package-card' key={eachpackage.id} >
          <h1>{eachpackage.price}</h1>
<h1>{eachpackage.pooja}</h1>
<p>{eachpackage.package}</p>
<ul>
  <li>
{eachpackage.one}
  </li>
  <li>
    {eachpackage.two}
  </li>
  <li>
    {eachpackage.three}
  </li>
  <li>
    {eachpackage.four}
  </li>
</ul>
<button onClick={handlePackageClick}>Participate</button>
        </div>

       ))}
            </div>
    
          </section>
        </div>
      )}

      {showPopup && (
        <PujaDetailPopup pooja={selectedPooja.name} onClose={closePopup} />
      )}
    </div>
  );
};

export default PoojaSection;
