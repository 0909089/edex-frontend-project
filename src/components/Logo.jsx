import React from 'react'
import AppleLogo from '../assets/images/apple-logo.png';

function Logo() {
  return (
    <div style={{
      width:'16px'
    }}>
      <img src={AppleLogo} alt="" className="img-fluid"/>
    </div>
  )
}

export default Logo