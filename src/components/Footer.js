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

      <div class='footer-links'>

        <div className='footer-link-wrapper'>

          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>

          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>

        </div>

        <div className='footer-link-wrapper'>

          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>

          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>

        </div>

      </div>
      
      <section class='social-media'>
        
        <div class='social-media-wrap'>
          
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              PCSTORE
              <i class='fa-solid fa-laptop-code' />
            </Link>
          </div>

          <small class='website-rights'>PCSTORE © 2023</small>

          <div class='social-icons'>

            <Link class='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
              <i class='fab fa-facebook-f' />
            </Link>
            
            <Link class='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
              <i class='fab fa-facebook-f' />
            </Link>

            <Link class='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
              <i class='fab fa-facebook-f' />
            </Link>

            <Link class='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
              <i class='fab fa-facebook-f' />
            </Link>
            
            <Link class='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
              <i class='fab fa-facebook-f' />
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

