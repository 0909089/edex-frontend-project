import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './Button.css';

function Button({text, bgColor, fgColor, styles, onClick}) {

  const navigate = useNavigate();

  return (
    <button className='btn fw-semibold px-3 py-2 my-3' style={{
      minWidth:'5rem',
      borderRadius:'25px',
      backgroundColor:`${bgColor}`,
      color:`${fgColor}`,
      ...styles,
    }} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button