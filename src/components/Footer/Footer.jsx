import React from 'react'
import './css/Footer.css';
import facebook from './images/facebook.svg';
import footerLogo from './images/footer-logo.svg';
import instagram from './images/instagram.svg';
import twitter from './images/twitter.svg';
import youtube from './images/youtube.svg';

export default function Footer() {
  return (
    <footer className='footer'>
        <div className="container">
            <div className="footer-top">
                <ul className='footer-top-list'>
                    <li>Olearn</li>
                    <li>About</li>
                    <li>What we offer</li>
                    <li>Leadership</li>
                    <li>Careers</li>
                </ul>
                <ul className='footer-top-list'>
                    <li>Courses</li>
                    <li>Classroom Courses</li>
                    <li>Virtual Courses</li>
                    <li>E-Learning Courses</li>
                    <li>Off Line Courses</li>
                </ul>
                <ul className='footer-top-list'>
                    <li>Community</li>
                    <li>Learner</li>
                    <li>Partners</li>
                    <li>Developers</li>
                    <li>Teaching Center</li>
                </ul>
                <ul className='footer-top-list'>
                    <li>Quick Links</li>
                    <li>Home</li>
                    <li>Professional Edu</li>
                    <li>Courses</li>
                    <li>Admissions</li>
                </ul>
                <ul className='footer-top-list'>
                    <li>More</li>
                    <li>Press</li>
                    <li>Inventors</li>
                    <li>Helps</li>
                    <li>Terms</li>
                </ul>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-logo">
                    <img src={footerLogo} alt="" />
                    <h3>ZIRO</h3>
                </div>
                <ul className="footer-bottom-list">
                    <li>Terms of Use</li>
                    <li>Portfolio</li>
                    <li>Privacy policy</li>
                    <li>Contact us</li>
                    <li>FAQ</li>
                </ul>
                <div className="footer-bottom-icons">
                    <div className="icon">
                        <img src={facebook} alt="" />
                    </div>
                    <div className="icon">
                        <img src={instagram} alt="" />
                    </div>
                    <div className="icon">
                        <img src={twitter} alt="" />
                    </div>
                    <div className="icon">
                        <img src={youtube} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </footer>  
  )
}