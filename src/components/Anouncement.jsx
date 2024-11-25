import React from 'react'

import './Anouncement.css';
import anouncementLogo from '../assets/images/anouncement-logo.png';
import { Link } from 'react-router-dom';

function Anouncement({text, link}) {
  return (
    <div className='anouncement py-1 text-center d-flex justify-content-center align-items-center'>
      <img src={anouncementLogo} alt="" className="img-fluid" width={'24'}/>
      <h6 className="m-3 mx-2 content text-dark fw-normal" style={{fontSize:'14px',}}>{text}</h6>
      <Link to={link} className='text-decoration-none text-primary fw-regular'>Learn more &gt;</Link>
    </div>
  )
}

export default Anouncement