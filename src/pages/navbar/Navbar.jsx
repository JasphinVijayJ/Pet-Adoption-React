import './Navbar.css'
import { Link, useLocation } from 'react-router'
import logo from '../../assets/Website-Logo.jpeg'
import { useState } from 'react'

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get current URL path

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  // Highlight the current page Navigation
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Pets', path: '/pets' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <section className='nav-section'>
      <img src={logo} alt="Website Logo" />

      {/* Hamburger Menu */}
      <div className='menu' onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation Links */}
      <nav className={`nav-top ${isMenuOpen ? 'show' : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={closeMenu}
            style={{ color: location.pathname === link.path ? 'deeppink' : '' }} >
            {link.name}
          </Link>
        ))}
      </nav>
    </section>
  )
}

export default Navbar