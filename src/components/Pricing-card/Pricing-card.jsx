import React from 'react'
import './css/Pricing-card.css';
import check from './images/check.svg';

export default function PricingCard(props) {

  const { rate, price } = props;
  
  return (
    <div className='pricing-card'>
        <h4>{rate}</h4>
        <h2>{price}</h2>
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