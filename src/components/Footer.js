import React from 'react';
import '../component-style/Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

export const Footer = () => {

  return (

    <div className='footer-container'>

      <section className='footer-subscription'>

        <p className='footer-subscription-heading'>
          Join the newsletter
        </p>

        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>

        <div className='input-areas'>
          <form>
            <input className='footer-input' name='email' type='email' placeholder='Your Email' />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>

      </section>

      <div className='footer-links'>

        <div className='footer-link-wrapper'>

          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>

          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>

        </div>

        <div className='footer-link-wrapper'>

          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>

          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>

        </div>

      </div>
      
      <section className='social-media'>
        
        <div className='social-media-wrap'>
          
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              PCSTORE
              <i className='fa-solid fa-laptop-code' />
            </Link>
          </div>

          <small className='website-rights'>PCSTORE © 2023</small>

          <div className='social-icons'>

            <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
              <i className='fab fa-facebook-f' />
            </Link>
            
            <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
              <i className='fab fa-facebook-f' />
            </Link>

            <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
              <i className='fab fa-facebook-f' />
            </Link>

            <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
              <i className='fab fa-facebook-f' />
            </Link>
            
            <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
              <i className='fab fa-facebook-f' />
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

