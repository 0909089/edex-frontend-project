import React from 'react'
import Logo from './Logo'
import NavBar from './NavBar'

import './Header.css';

function Header() {
  return (
    <header
      className={`d-flex justify-content-center align-items-center`}>
      <div className="wrapper bg-transparent w-100">
        <NavBar></NavBar>
      </div>
    </header>
  )
}

export default Header