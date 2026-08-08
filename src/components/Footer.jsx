import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-text-primary)', color: 'var(--color-cream)', paddingTop: '4rem', paddingBottom: '1.5rem' }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '3rem',
        marginBottom: '3rem'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <img src="/logo.png" alt="FITERA Logo" style={{ height: '50px', marginBottom: '1.25rem', filter: 'brightness(0) invert(1)' }} />
          <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem', opacity: 0.8, lineHeight: '1.5', maxWidth: '300px' }}>
            Elevating lifestyle through premium fitness and holistic wellness. Join us and transform your body and mind.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {/* Instagram */}
            <a href="#" style={{ opacity: 0.7, transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', color: 'var(--color-cream)' }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = 'var(--color-rosegold)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.color = 'var(--color-cream)'; }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            {/* Facebook */}
            <a href="#" style={{ opacity: 0.7, transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', color: 'var(--color-cream)' }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = 'var(--color-rosegold)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.color = 'var(--color-cream)'; }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            {/* Twitter / X */}
            <a href="#" style={{ opacity: 0.7, transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', color: 'var(--color-cream)' }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = 'var(--color-rosegold)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.color = 'var(--color-cream)'; }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
            </a>
          </div>
        </div>
        
        <div>
          <h4 style={{ marginBottom: '1.25rem', fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 500, color: 'var(--color-rosegold)' }}>Explore</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {['About', 'Programs', 'Memberships', 'Gallery'].map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} style={{ fontSize: '0.9rem', opacity: 0.8, transition: 'opacity 0.2s ease' }}
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
          <h4 style={{ marginBottom: '1.25rem', fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 500, color: 'var(--color-rosegold)' }}>Contact</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li style={{ fontSize: '0.9rem', opacity: 0.8, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--color-rosegold)', fontSize: '1rem' }}>📍</span> 123 Wellness Blvd, NY 10001
            </li>
            <li style={{ fontSize: '0.9rem', opacity: 0.8, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--color-rosegold)', fontSize: '1rem' }}>✉️</span> hello@fitera.com
            </li>
            <li style={{ fontSize: '0.9rem', opacity: 0.8, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--color-rosegold)', fontSize: '1rem' }}>📞</span> +1 (555) 123-4567
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container" style={{
        borderTop: '1px solid rgba(253, 251, 247, 0.1)',
        paddingTop: '1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        fontSize: '0.8rem',
        opacity: 0.7
      }}>
        <div>&copy; {new Date().getFullYear()} FITERA. All rights reserved.</div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#" style={{ transition: 'opacity 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}>Privacy Policy</a>
          <a href="#" style={{ transition: 'opacity 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
