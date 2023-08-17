import React from 'react'
import { Link } from 'react-router-dom'
//rafce react arrow function component export

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <div className='container'>
          <nav className='navbar__nav'>
            <h3 className='navbar__brand'>
              <Link to="/">
                <i className='fas fa-video'>TV SHOW SEARCH</i>
              </Link>
            </h3>
            <ul className='nav__link'>
              <li className='links__link'>
                <Link to="/">HOME</Link>
              </li>
              <li className='links__link'>
                <Link to="/about">ABOUT</Link>
              </li>
            </ul>
          </nav>
        </div>


    </div>
    
    </>
  )
}

export default Navbar