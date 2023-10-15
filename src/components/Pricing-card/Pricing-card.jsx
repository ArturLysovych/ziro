import React from 'react'
import './css/Pricing-card.css';
import check from './images/check.svg';

export default function PricingCard() {
  return (
    <div className='pricing-card'>
        <h4>FREE</h4>
        <h2>$0</h2>
        <h5>Per month</h5>
        <p>
            <img src={check} alt="" />
            Lorem ipsum dolor sit amet.
        </p>
        <p>
            <img src={check} alt="" />
            Lorem ipsum dolor sit amet.
        </p>
        <p>
            <img src={check} alt="" />
            Sed do eiusmod tempor.
        </p>
        <button>Purchase Now</button>
    </div>
  )
}