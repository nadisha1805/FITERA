import React, { useState, useEffect } from 'react';

const Navbar = ({ onJoinClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      padding: scrolled ? '1rem 2rem' : '2rem',
      backgroundColor: scrolled ? 'rgba(253, 251, 247, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000,
      transition: 'all 0.4s ease'
    }}>
      <div className="logo" style={{ 
        display: 'flex',
        alignItems: 'center'
      }}>
        <img src="/logo.png" alt="FITERA Logo" style={{ height: '140px' }} />
      </div>
      
      <div className="nav-links" style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'center'
      }}>
        {['Programs', 'Memberships', 'Gallery', 'About'].map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} style={{
            fontSize: '0.9rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            fontWeight: '500'
          }}>
            {link}
          </a>
        ))}
        <button className="btn btn-primary" onClick={onJoinClick} style={{ marginLeft: '1rem', padding: '0.75rem 1.5rem', fontSize: '0.85rem' }}>
          Join Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
