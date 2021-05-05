import React from 'react';
import './Navigation.scss';

export const Navigation = () => {
  return(
    <nav className="nav">
      <a href={'/'}><span id="logo-type">Caesar Cipher</span></a>
    </nav>
  )
}