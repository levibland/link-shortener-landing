import React from 'react';
import HeroButton from './HeroButton';

import './styles/Hero.scss';
import Spheres from '../../assets/spheres.png';
import Ellipse from '../../assets/ellipse.png';

function Hero() {
  return (
    <div className="hero-container">
        <div className="hero-left">
            <h1 className="hero-title">
                <span className="blue-text">Shortener</span> - Earn Money Shortening Links
            </h1>
            <sub className="hero-sub">
                Lorem ipsum dolor sit amet, consectuer adipisicng. Lorem ipsum dolor sit amet, consectuer adipisicng. Lorem ipsum dolor sit amet.
            </sub>
            <HeroButton />
        </div>
        <div className="hero-right">
            <img className="hero-img" src={Spheres} />
        </div>
        <img className="ellipse" src={Ellipse} />
    </div>
  )
}

export default Hero;