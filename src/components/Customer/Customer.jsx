import React from 'react'
import './css/Customer.css';
import prev from './images/prev.svg';
import next from './images/next.svg';
import leftImage from './images/left-image.svg';
import clients from './images/clients.svg';
import fullStar from './images/full-star.svg';
import nonFullStar from './images/non-full-star.svg';


export default function Customer() {
  return (
    <div className='Customer'>
        <div className="container">
            <h2>What Our Customer Says</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <div className="customer-bottom">
                <img src={leftImage} alt="" />
                <div className="customer-bottom-right">
                    <h2>William Smith</h2>
                    <h3>CEO OF THE LOVE STUDENTS</h3>
                    <div className="stars">
                        <img src={fullStar} alt="" />
                        <img src={fullStar} alt="" />
                        <img src={fullStar} alt="" />
                        <img src={fullStar} alt="" />
                        <img src={nonFullStar} alt="" />
                        4.8
                    </div>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip.”</p>
                    <div className="clients">
                        <div className="buttons">
                            <img src={prev} alt="" />
                            <img src={next} alt="" />
                        </div>
                        <img src={clients} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}