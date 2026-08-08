import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-text-primary)', color: 'var(--color-cream)', paddingTop: '5rem', paddingBottom: '2rem' }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '4rem',
        marginBottom: '4rem'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <img src="/logo.png" alt="FITERA Logo" style={{ height: '80px', marginBottom: '1.5rem', filter: 'brightness(0) invert(1)' }} />
          <p style={{ fontSize: '1rem', marginBottom: '2rem', opacity: 0.8, lineHeight: '1.6', maxWidth: '300px' }}>
            Elevating lifestyle through premium fitness and holistic wellness. Join us and transform your body and mind.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Instagram', 'Facebook', 'Twitter'].map(social => (
              <a key={social} href="#" style={{ 
                fontSize: '0.9rem', 
                opacity: 0.7, 
                textTransform: 'uppercase', 
                letterSpacing: '1px',
                borderBottom: '1px solid transparent',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.borderColor = 'var(--color-rosegold)';
                e.currentTarget.style.color = 'var(--color-rosegold)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.7';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.color = 'inherit';
              }}
              >
                {social.slice(0,2)}
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 style={{ marginBottom: '2rem', fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-rosegold)' }}>Explore</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {['About', 'Programs', 'Memberships', 'Gallery'].map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} style={{ fontSize: '1rem', opacity: 0.8, transition: 'opacity 0.2s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 style={{ marginBottom: '2rem', fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-rosegold)' }}>Contact</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ fontSize: '1rem', opacity: 0.8, display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <span style={{ color: 'var(--color-rosegold)' }}>📍</span> 123 Wellness Blvd, NY 10001
            </li>
            <li style={{ fontSize: '1rem', opacity: 0.8, display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <span style={{ color: 'var(--color-rosegold)' }}>✉️</span> hello@fitera.com
            </li>
            <li style={{ fontSize: '1rem', opacity: 0.8, display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <span style={{ color: 'var(--color-rosegold)' }}>📞</span> +1 (555) 123-4567
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container" style={{
        borderTop: '1px solid rgba(253, 251, 247, 0.1)',
        paddingTop: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        fontSize: '0.9rem',
        opacity: 0.7
      }}>
        <div>&copy; {new Date().getFullYear()} FITERA. All rights reserved.</div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#" style={{ transition: 'opacity 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}>Privacy Policy</a>
          <a href="#" style={{ transition: 'opacity 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
