import React, { useState } from 'react';  
import '../style/navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = ({ name, avatar_url, html_url , username }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getActiveClass = ({ isActive }) =>
    `navbar__item ${isActive ? 'active-page' : ''}`;

  return (
    <header className="navbar">
      <div className="navbar__container">
        
        {/* Logo */}
        <a href="/" className="navbar__logo">
          <span className="navbar__logo-text">{name}</span>
        </a>

        {/* Toggle Button */}
        <button
          className="navbar__toggle"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>

        {/* Nav Links */}
        <nav className={`navbar__menu ${isOpen ? 'navbar__menu--open' : ''}`}>
          <NavLink to={`/profile/${username}`} className={getActiveClass}>Repositories</NavLink>
          <a href={html_url} target="_blank" rel="noopener noreferrer" className="navbar__item">Github</a>
          <NavLink to={`/profile/${username}/star`} className={getActiveClass}>Star</NavLink>
          <a href="https://kushdeveloper.onrender.com" target="_blank" rel="noopener noreferrer" className="navbar__item">Developer</a>
        </nav>

        {/* Avatar */}
        <div className="navbar__avatar">
          <img src={avatar_url || "https://tse2.mm.bing.net/th/id/OIP.PoS7waY4-VeqgNuBSxVUogAAAA?rs=1&pid=ImgDetMain"} alt="Profile avatar" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
