import React, {useState} from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {

  const {click, setClick} = useState(false);

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">

                <Link to="/" className="navbar-logo">
                  PCSTORE
                </Link>

                <div className="menu-icon">
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

            </div>
        </nav>
    </>
  )
}
