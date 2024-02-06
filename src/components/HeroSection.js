import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'
import para from '../images/weddingimg.jpg'

function HeroSection() {
  return (
    <div className='hero-container'>
        <img src={para} alt='ess' className='hero-blur'/>
        <h1>Wyślij swoje ślubne życzenia</h1>
        <p>Za pomocą naszej strony jest to banalnie proste</p>
        <div className='hero-btns'>
          <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
            Zaczynajmy!
          </Button>
          <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
            Jak to działa? <i className='far fa-play-circle'/>
          </Button>
        </div>
    </div>
  )
}

export default HeroSection