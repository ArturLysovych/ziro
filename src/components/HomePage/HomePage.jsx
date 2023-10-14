import React from 'react'
import Header from '../Header/Header';
import './css/HomePage.css';
import girl from './images/girl.svg';
import play from './images/play.svg';

export default function HomePage() {
  return (
    <div className='HomePage'>
      <div className="container">
        <Header />
        <div className='HomePage-bottom'>
        <section>
          <h2>Find out talented <span>freelancer</span> with better review faster.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
          <div className='buttons'>
            <button>Discover Now</button>
            <div>
              <img src={play} alt="" />
              Watch Demo
            </div>
          </div>
        </section>
        <img className='girl' src={girl} alt="" />
        </div>
      </div>
    </div>
  )
}
