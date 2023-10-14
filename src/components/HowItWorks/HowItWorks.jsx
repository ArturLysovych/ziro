import React from 'react'
import './css/HowItWorks.css';
import arrow from './images/arrow.svg';
import play from './images/play.svg';

export default function HowItWorks() {
  return (
    <div className='HowItWorks'>
        <div className="container">
            <section>
                <h6>How it works</h6>
                <h2>Start find a job you love with us easily</h2>
                <div className="info-cards">
                    <div className="card">
                        <div className='card-left'>
                            <span>1</span>
                            <h3>Complete Profile</h3>
                        </div>
                        <img src={arrow} alt="" />
                    </div>
                    <div className="card">
                        <div className="card-top">
                            <div className='card-left'>
                                <span>2</span>
                                <h3>Apply job</h3>
                            </div>
                            <img src={arrow} alt="" />
                        </div>
                        <div className="card-bottom">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                        </div>
                    </div>
                    <div className="card">
                        <div className='card-left'>
                            <span>3</span>
                            <h3>Apply job</h3>
                        </div>
                        <img src={arrow} alt="" />
                    </div>
                </div>
            </section>
            <div className="right-image">
                <img src={play} alt="" />
            </div>
        </div>
    </div>
  )
}
