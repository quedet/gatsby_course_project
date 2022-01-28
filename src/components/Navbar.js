import React from 'react';
import { Link } from 'gatsby'

function Navbar() {
  return (
    <nav className='navbar'>
    <div className='navbar__wrapper'>
      <div className='navbar__brand'>
        <div className='navbar__items'>
          <Link className='navbar__link' to='/'>
            Feido Blogs
          </Link>
        </div>
      </div>
      <div className='navbar__menu'>
        <div className='navbar__items'>
          <Link className='navbar__link' to='/'>
            Home
          </Link>
        </div>
        <div className='navbar__items'>
          <Link className='navbar__link' to='/about'>
            About
          </Link>
        </div>
        <div className='navbar__items'>
          <Link className='navbar__link' to='/users'>
            Users
          </Link>
        </div>
        <div className='navbar__items'>
          <Link className='navbar__link' to='/contact'>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  </nav>);
}

export default Navbar;
