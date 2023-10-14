import React from 'react'
import './css/FeaturedJobs.css';
import prev from './images/prev.svg';
import next from './images/next.svg';
import FeaturedJobsCard from '../FeaturedJobs-card/FeaturedJobs-card';

export default function FeaturedJobs() {
  return (
    <div className='FeaturedJobs'>
        <div className="container">
            <h2>Featured Jobs</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <section>
                <div className="buttons">
                    <img src={prev} alt="" />
                    <img src={next} alt="" />
                </div>
                <FeaturedJobsCard />
                <FeaturedJobsCard />
                <FeaturedJobsCard />    
            </section>
            <button>View More</button>
        </div>
    </div>
  )
}