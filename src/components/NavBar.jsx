import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faSearch } from '@fortawesome/free-solid-svg-icons'

import NavBarCss from './NavBar.module.css';

function NavBar() {

  return (
    <div className='NavBar d-flex justify-content-between align-items-center w-100 py-2'>
      <Link to=''><Logo></Logo></Link>
      <Link to='/store' className={NavBarCss.linkStyle}>Store</Link> 
      <Link to='/mac' className={NavBarCss.linkStyle}>Mac</Link> 
      <Link to='/ipad' className={NavBarCss.linkStyle}>iPad</Link> 
      <Link to='/iphone' className={NavBarCss.linkStyle}>iPhone</Link> 
      <Link to='/watch' className={NavBarCss.linkStyle}>Watch</Link> 
      <Link to='/vision' className={NavBarCss.linkStyle}>Vision</Link> 
      <Link to='/airpods' className={NavBarCss.linkStyle}>AirPods</Link> 
      <Link to='/tv-home' className={NavBarCss.linkStyle}>TV & Home</Link> 
      <Link to='/entertainment' className={NavBarCss.linkStyle}>Entertainment</Link> 
      <Link to='/accessories' className={NavBarCss.linkStyle}>Accessories</Link> 
      <Link to='/support' className={NavBarCss.linkStyle}>Support</Link> 
      <Link to='/search' className={NavBarCss.linkStyle}>
        <FontAwesomeIcon icon={faSearch} />
      </Link> 
      <Link to='/shop/bag' className={NavBarCss.linkStyle}>
        <FontAwesomeIcon icon={faBagShopping} />
      </Link> 
    </div>
  )
}

export default NavBar