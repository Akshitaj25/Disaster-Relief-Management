import React, { useState } from 'react';
import Subnav from './Subnav.jsx';
import Nav from './Nav.jsx';
import Carousel from './Carousel.jsx';
import { AiOutlineCopyright } from "react-icons/ai";
import './Home.css';
import './EmergencyReport.css';

function EmergencyReport(){
  const [location, setLocation] = useState('');
  const [emergencyType, setEmergencyType] = useState('');
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [situation, setSituation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Implement form submission logic here (e.g., send data to server)

    alert('Emergency report submitted successfully!');

    // Reset form fields
    setLocation('');
    setEmergencyType('');
    setName('');
    setMobileNumber('');
    setSituation('');
  };

  return (
    <div className="bg1">
        <Nav/>
        <Subnav/>
        <Carousel/>
        <br/>
        <div className='RepEmHead1'><b>REPORT AN EMERGENCY IN YOUR AREA</b></div>
        <div className='RepEmP1'>
            <p>As a dedicated disaster management group, we're committed to providing efficient and timely emergency relief to those in need. We understand that every moment counts in the aftermath of a disaster, and we work tirelessly to ensure that essential resources reach affected communities as quickly as possible. Our focus on streamlined operations and effective coordination allows us to maximize the impact of our efforts, offering crucial support during these challenging times.</p>
        </div>
        <div className="greywrapper">
            <div className="contacts">
                <div className="contactshead">IMPORTANT CONTACTS</div>
                <div className="d-flex nums">
                    <p>
                        <ul>
                        <li>National Emergency Number: 112</li>
                        <li>Police Department: 100</li>
                        <li> Disaster Management Services: 108</li>
                        <li>Air Ambulance: 9540161344</li>
                        <li>Earthquake/ Flood/ Disaster N.D.R.F: 011-24363260</li>
                        <li>Railway Enquiry: 139</li>
                        <li>ORBO Centre, AIIMS (For Donation Of Organ) Delhi: 1060</li>
                        </ul>
                    </p>
                    <p>
                        <ul>
                        <li>Fire Department: 101</li>
                        <li>Ambulance: 102</li>
                        <li>Women Helpline: 1091</li>
                        <li>Disaster Management N.D.M.A: 011-26701728-1078</li>
                        <li>Deputy Commissioner of Police - Missing Child and Women: 1094</li>
                        <li>Railway Accident Emergency Service: 1072</li>
                        <li>Relief Commissioner for Natural Calamities: 1070</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
      <div className="report-form">
        <div className="formhead">Emergency Form</div>
        <div className="formheadp">Please fill out the form below to report an emergency in your area.</div>
        <form onSubmit={handleSubmit}>
          {/* <div className="form-labels d-flex"> */}
          <div className='flex-item'>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          </div>
          <div className='flex-item'>
          <label htmlFor="emergency">What is the emergency?</label>
          <select
            id="emergency"
            name="emergency"
            value={emergencyType}
            onChange={(e) => setEmergencyType(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="Fire">Fire</option>
            <option value="Earthquake">Earthquake</option>
            <option value="Gas Leak">Gas Leak</option>
            <option value="Rail Accident">Rail Accident</option>            
            <option value="Flood">Flood</option>
            <option value="Cyclone">Cyclone</option>
            <option value="Other">Other</option>
          </select>
          </div>
            {/* <div className="form-labels d-flex"> */}
                <div className='flex-item'>
                    <label htmlFor="name">Name:</label>
                    <input type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required/>
                </div>
                <div className='flex-item'>
                    <label htmlFor="mobile">Mobile Number:</label>
                    <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required/>
                </div>
          {/* </div> */}
          <div className='flex-item'>
          <label htmlFor="situation">Situation:</label>
          <textarea
            id="situation"
            name="situation"
            rows="5"
            value={situation}
            onChange={(e) => setSituation(e.target.value)}
            required
          />
          </div>
          <div className='flex-item'>
          <button type="submit">Submit Report</button>
          </div>
        </form>
      </div>
      <hr/>
      <div className='copyright'>
            <b><AiOutlineCopyright/> Akshita Jain, V. Sai Shreyas </b>
      </div>
    </div>
  );
};

export default EmergencyReport;
