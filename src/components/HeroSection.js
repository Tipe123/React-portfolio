import React from 'react'
import { Button } from './Button'
import '../App.css'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="video/video-2.mp4" autoPlay loop muted />
            <h1>Have a break </h1>
            <p>Advertise on the website we can help you</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize='btn--large'>Get Started</Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize='btn--large'>Contact Us<i className="fa fa-play-circle" /></Button>

            </div>
        </div>
    )
}

export default HeroSection
