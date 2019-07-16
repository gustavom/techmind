import React from 'react';
import './header.css';
import Logo from '../../assets/images/icon-tech-mind.svg';

function Header(){
  return(
    <header className="header">
      <Logo fill="#fff" width="55px" height="auto" />
      <h1>TechMind</h1>
    </header>
  )
}

export default Header;