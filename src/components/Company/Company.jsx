import React from 'react'
import './css/Company.css';
import company1 from './images/company-1.svg';
import company2 from './images/company-2.svg';
import company3 from './images/company-3.svg';
import company4 from './images/company-4.svg';
import company5 from './images/company-5.svg';
import company6 from './images/company-6.svg';

export default function Company() {
  return (
    <div className='Company'>
        <div className="container">
            <img src={company1} alt="" />
            <img src={company2} alt="" />
            <img src={company3} alt="" />
            <img src={company4} alt="" />
            <img src={company5} alt="" />
            <img src={company6} alt="" />
        </div>
    </div>
  )
}
