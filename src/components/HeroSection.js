import React from 'react'
import '../App.css'
import './HeroSection.css'
import {Button} from './Button'
import Popup from './Popup'
import {useState} from 'react';


function HeroSection() {

  const [buttonPopUp, setButtonPopUp] = useState(false);

  return (
    <div className='hero-container'>
        <video src="/videos/Homepage.mp4" autoPlay loop muted></video>
        <h1>Your Fitness Journey Awaits!</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
            <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                Get Started
            </Button>
            <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            onClick={() => setButtonPopUp(true)}
            >
          Watch Demo
        </Button>

        <Popup trigger={buttonPopUp} setTrigger ={setButtonPopUp}>
            <video className="video-container" src="/videos/video-1.mp4" autoPlay loop muted></video>
        </Popup>
        </div>
    </div>
  )
}

export default HeroSection