import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Left Navigation */}
          <nav className="desktop-nav-left">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
          </nav>

          {/* Center Logo */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <img
              src="/logo.png"
              alt="E and I Decor and More"
              className="logo-image"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <h1 className="logo-text">Bienes™</h1>
          </Link>

          {/* Right Navigation */}
          <nav className="desktop-nav-right">
            <NavLink to="/blog" className="nav-link">Blog</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="mobile-nav-link" onClick={closeMenu}>Home</Link>
          <Link to="/gallery" className="mobile-nav-link" onClick={closeMenu}>Gallery</Link>
          <Link to="/blog" className="mobile-nav-link" onClick={closeMenu}>Blog</Link>
          <Link to="/contact" className="mobile-nav-link" onClick={closeMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

