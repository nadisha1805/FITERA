import React from 'react';

const Gallery = () => {
  const images = [
    '/spin_bikes.jpg',
    '/treadmills.jpg',
    '/bench.jpg',
    '/squat_rack.jpg',
    '/dumbbells.jpg',
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop'
  ];

  return (
    <section id="gallery" className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '5rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>The FITERA Experience</h2>
          <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--color-rosegold)', margin: '0 auto 1.5rem auto' }}></div>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>Explore our state-of-the-art facilities designed for optimal performance and luxurious recovery.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gridAutoRows: '350px',
          gap: '1.5rem'
        }}>
          {images.map((src, idx) => (
            <div key={idx} style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-sm)',
              cursor: 'pointer'
            }}
            className="gallery-item"
            onMouseEnter={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.08)';
              e.currentTarget.querySelector('.overlay').style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
              e.currentTarget.querySelector('.overlay').style.opacity = '0';
            }}
            >
              <img src={src} alt={`FITERA Facility ${idx + 1}`} style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.7s cubic-bezier(0.165, 0.84, 0.44, 1)'
              }} />
              <div 
                className="overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(44, 40, 37, 0.8), rgba(44, 40, 37, 0.1))',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  paddingBottom: '2rem',
                  opacity: 0,
                  transition: 'opacity 0.4s ease'
                }}
              >
                <span style={{ 
                  color: 'var(--color-cream)', 
                  fontFamily: 'var(--font-heading)', 
                  fontSize: '1.5rem',
                  letterSpacing: '1px',
                  borderBottom: '1px solid var(--color-rosegold)',
                  paddingBottom: '4px'
                }}>
                  Explore
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
