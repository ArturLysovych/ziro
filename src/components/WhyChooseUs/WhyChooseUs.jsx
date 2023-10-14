import React from 'react'
import './css/WhyChooseUs.css';
import icon from './images/icon.svg';

export default function WhyChooseUs() {
  return (
    <div className='WhyChooseUs'>
        <div className="container">
            <h2>Why Choose Us</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h3>
            <div className='card-container'>
                <div className="card">
                    <div className="icon">
                        <img src={icon} alt="" />
                    </div>
                    <h2>Trusted</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={icon} alt="" />
                    </div>
                    <h2>Easy to Use</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={icon} alt="" />
                    </div>
                    <h2>Faster</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
            </div>
        </div>
    </div>
  )
}