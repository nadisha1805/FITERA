import React from 'react';

const Features = () => {
  const benefits = [
    { title: 'Certified Personal Trainers', desc: 'Expert guidance tailored to your goals.' },
    { title: 'Premium Equipment', desc: 'State-of-the-art machines and free weights.' },
    { title: 'Personalized Workout Plans', desc: 'Custom strategies for maximum results.' },
    { title: 'Nutrition Guidance', desc: 'Fuel your body with professional advice.' },
    { title: 'Modern Facilities', desc: 'Clean, spacious, and inspiring environments.' },
    { title: 'Friendly Community', desc: 'Supportive members who uplift each other.' }
  ];

  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'var(--color-cream)', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '5rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Why Choose FITERA</h2>
          <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--color-rosegold)', margin: '0 auto 1.5rem auto' }}></div>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>Experience the perfect balance of luxury and performance in every aspect of your fitness journey.</p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem'
        }}>
          {benefits.map((benefit, index) => (
            <div key={index} style={{
              position: 'relative',
              padding: '3rem 2rem',
              backgroundColor: '#ffffff',
              borderRadius: 'var(--radius-lg)',
              transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-sm)',
              overflow: 'hidden',
              border: '1px solid rgba(207, 164, 144, 0.1)'
            }}
            className="feature-card"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              e.currentTarget.style.borderColor = 'var(--color-rosegold)';
              e.currentTarget.querySelector('.feature-number').style.color = 'var(--color-rosegold)';
              e.currentTarget.querySelector('.feature-number').style.transform = 'scale(1.1) translateX(-10px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              e.currentTarget.style.borderColor = 'rgba(207, 164, 144, 0.1)';
              e.currentTarget.querySelector('.feature-number').style.color = 'var(--color-beige)';
              e.currentTarget.querySelector('.feature-number').style.transform = 'none';
            }}
            >
              <div 
                className="feature-number"
                style={{ 
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '8rem',
                  fontWeight: '700',
                  color: 'var(--color-beige)',
                  opacity: '0.3',
                  lineHeight: '1',
                  transition: 'all 0.5s ease',
                  zIndex: '0'
                }}
              >
                0{index + 1}
              </div>
              
              <div style={{ position: 'relative', zIndex: '1' }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  backgroundColor: 'var(--color-peach)', 
                  borderRadius: '12px',
                  marginBottom: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-rosegold)',
                  fontSize: '1.5rem',
                  transform: 'rotate(-5deg)',
                  boxShadow: '0 4px 10px rgba(240, 215, 201, 0.5)'
                }}>
                  ✦
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: '600' }}>{benefit.title}</h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.6', opacity: '0.85' }}>{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
