import React from 'react'
import logo from './images/logo.svg';
import searchIcon from './images/search.svg';
import './css/Header.css';

export default function Header() {
  return (
    <div className='Header'>
      <div className="header-left">
        <img src={logo} alt="" />
        <h2>ZIRO</h2>
      </div>
      <ul className="header-list">
          <li>Home</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>Become a number</li>
          <li>About us</li>
      </ul>
      <div className="input">
        <input type="text" placeholder='Search here....' />
        <div className="search">
          <img src={searchIcon} height={14} width={14} alt="" />
        </div>
      </div>
      <p>
          <span>Login</span>
          /
          <span>Sign up</span>
      </p>
      <div className="burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  )
}
