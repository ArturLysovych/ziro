import React from 'react'
import PricingCard from '../Pricing-card/Pricing-card';
import './css/Pricing.css';

export default function Pricing() {
  return (
    <div className='Pricing'>
        <div className="container">
            <h2>Pricing Plan</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <div className="pricing-container">
                <PricingCard 
                  rate='FREE'
                  price='0$'
                />
                <PricingCard 
                  rate='PREMIUM'
                  price='175$'
                />
                <PricingCard 
                  rate='PLATINUM'
                  price='500$'
                />
            </div>
        </div>
    </div>
  )
}