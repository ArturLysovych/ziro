import React from 'react'
import './css/FeaturedJobs-card.css';
import prev from './images/prev.svg';
import next from './images/next.svg';
import man from './images/man.svg';
import mark from './images/mark.svg';
import money from './images/money.svg';
import heart from './images/heart.svg';

export default function FeaturedJobsCard() {
  return (
    <div className='user-card'>
        <div className="user-card-top">
            <h2>...</h2>
            <div className="user">
                <img src={man} alt="" />
            </div>
            <h3>Database Programmer</h3>
            <p>Marraz Team</p>
        </div>
        <div className="user-card-bottom">
            <h4>
                <img src={money} alt="" />$14,000 - $25,000 <span>/monthly</span>
            </h4>
            <h4>
                <img src={mark} alt="" />London,Enlend     <span>View map</span>
            </h4>
            <div className="buttons">
                <button>
                    <img src={heart} alt="" />
                </button>
                <button>Apply Now</button>
            </div>
        </div>
    </div>
  )
}