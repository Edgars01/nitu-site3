import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../component-style/Navbar.css';
import { Button } from './Button';
import NavBarLink from './NavBarLink';

import { navLinks } from './NavBarLinkContent';

export const Navbar = () => {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  const showButton = () =>
    window.innerWidth <= 960 ? setButton(false) : setButton(true);

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
          <div className="navbar-container">

              <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                PCSTORE
                <i class="fa-solid fa-laptop-code"></i>
              </Link>

              <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>

              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                
                {
                  navLinks.map((item, index) =>  <NavBarLink key={index} url={item.url} title={item.title} onClick={closeMobileMenu}/>)
                }

                <li className='nav-item'>
                  <Link to='/products' className='nav-links-mobile' onClick={closeMobileMenu}>
                    NEWS
                  </Link>
                </li>

              </ul>
              
              {button && <Button buttonStyle='btn--outline'>NEWS</Button>}

          </div>
      </nav>
    </>
  )
}

