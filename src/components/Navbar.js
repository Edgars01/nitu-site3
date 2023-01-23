import React, {useState} from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                  PCSTORE
                  <i class="fa-solid fa-laptop"></i>
                </Link>
            </div>
        </nav>
    </>
  )
}
