import React from 'react'
import Logo from '../img/logo.png'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar'>
       <div className="container">
              <div className="logo">
                  <Link to='/'>
                      <img src={Logo} alt='Logo Name'/>
                  </Link>
                  
              </div>
              <div className="links">
                  <Link className='link' to='/?cat=food'>
                      <h6>FOOD</h6>
                  </Link>
                  <span>Morris</span>
                  <span>Logout</span>
                  <span className='write'>
                      <Link className='link' to='/write'>Write</Link>
                  </span>
              </div>
       </div>
    </div>
  )
}

export default Navbar
