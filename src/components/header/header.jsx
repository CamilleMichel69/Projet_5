import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../images/LOGO_Header.png";

function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <header className='header'>
      <figure>
        <img className='header__img' src={logo} alt="logo de l'agence kasa" />
      </figure>
      <nav className='header__nav'>
        <Link to="/" className={`header__navlink ${activeLink === '/' ? 'active' : ''}`}>Accueil</Link>
        <Link to="/about" className={`header__navlink ${activeLink === '/about' ? 'active' : ''}`}>A Propos</Link>
      </nav>
    </header>
  )
}

export default Header;