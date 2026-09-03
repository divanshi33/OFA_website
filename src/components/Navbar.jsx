import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'About Us', to: '/about' },
  { label: 'Career', to: '/career' },
  { label: 'Query', to: '/query' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <header className={`navbar-header${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-container">
          <NavLink to="/" className="logo" onClick={closeDrawer}>
            <img src={logoImg} alt="OFA Fitness" className="navbar-logo-img" />
          </NavLink>

          <nav className="desktop-nav">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="navbar-actions">
            <button
              className="mobile-menu-toggle"
              onClick={() => setDrawerOpen(!drawerOpen)}
              aria-label="Toggle Menu"
            >
              {drawerOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-drawer${drawerOpen ? ' open' : ''}`}>
        <nav className="mobile-nav">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={closeDrawer}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}
