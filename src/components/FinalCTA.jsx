import React from 'react';

const FinalCTA = ({ onJoinClick }) => {
  return (
    <section className="section-padding" style={{ 
      backgroundColor: 'var(--color-text-primary)',
      color: 'var(--color-cream)',
      textAlign: 'center'
    }}>
      <div className="container">
        <h2 style={{ color: 'var(--color-cream)', marginBottom: '2rem', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          Start Your Fitness Journey Today.
        </h2>
        <button className="btn btn-primary" onClick={onJoinClick} style={{ padding: '1.25rem 3rem', fontSize: '1.1rem' }}>
          Join Now
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;
