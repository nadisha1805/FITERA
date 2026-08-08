import React from 'react';

const Hero = ({ onJoinClick }) => {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '0 2rem',
      backgroundColor: 'var(--color-beige)',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url("https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2000&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.85,
        mixBlendMode: 'multiply'
      }}></div>
      
      <div className="container animate-fade-in" style={{ position: 'relative', zIndex: 10, maxWidth: '800px', margin: '0', paddingTop: '6rem' }}>
        <h1 style={{ color: 'var(--color-cream)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
          Transform Your Body.<br />
          <span style={{ color: 'var(--color-rosegold)', fontStyle: 'italic' }}>Elevate Your Lifestyle.</span>
        </h1>
        
        <p style={{ color: 'var(--color-ivory)', fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '600px', opacity: 0.9 }}>
          At FITERA, we combine expert coaching, premium equipment, and a supportive community to help you become your strongest self.
        </p>
        
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <button className="btn btn-primary" onClick={onJoinClick}>
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
