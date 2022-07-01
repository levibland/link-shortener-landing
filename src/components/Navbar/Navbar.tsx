import React, { useState, useEffect } from 'react';

import './styles/Navbar.scss';

function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [])

  return (
    <>
      <div className={`navbar ${scrollY > 50 ? "blur" : ""}`}>
          <a className="navbar-link">
            About
          </a>
          <a className="navbar-link">
            Payment
          </a>
          <a className="navbar-link">
            Start Now
          </a>
      </div>
    </>
  )
}

export default Navbar;