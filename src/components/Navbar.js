import React from 'react';
import { Link } from 'gatsby'
import * as NavStyles from '../styles/Navbar.module.scss'


function Navbar() {
  return (
    <nav className={ NavStyles.navbar }>
    <div className={NavStyles.navbar__wrapper}>
      <div className={NavStyles.navbar__brand}>
        <div className={NavStyles.navbar__items}>
          <Link className={NavStyles.navbar__link} to='/'>
            Feido Blogs
          </Link>
        </div>
      </div>
      <div className={NavStyles.navbar__menu}>
        <div className={NavStyles.navbar__items}>
          <Link className={NavStyles.navbar__link} to='/'>
            Home
          </Link>
        </div>
        <div className={NavStyles.navbar__items}>
          <Link className={NavStyles.navbar__link} to='/users'>
            Users
          </Link>
        </div>
        <div className={NavStyles.navbar__items}>
          <Link className={NavStyles.navbar__link} to='/about'>
            About
          </Link>
        </div>
        <div className={NavStyles.navbar__items}>
          <Link className={NavStyles.navbar__link} to='/contact'>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  </nav>);
}

export default Navbar;
