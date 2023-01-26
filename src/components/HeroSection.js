import React from 'react'
import '../App.css';
import { Button } from './Button';
import '../component-style/HeroSection.css';


const HeroSection = () => {
  return (
    
    <div className='hero-container'>
        
        <video src='/videos/vid1.mp4' autoPlay loop muted />

        <h1>PC STORE</h1>
        <p>WHAT ARE YOU WAITING FOR?</p>

        <div className="hero-btns">
            
            <Button className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
            >
                GET STARTED
            </Button>

            <Button className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'
            >
                WATCH TRAILER
                <i className="fa-solid fa-play"></i>
            </Button>

        </div>

    </div>

  )
}

export default HeroSection;