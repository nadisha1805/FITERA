import React from 'react';

const Programs = () => {
  const programsList = [
    { name: 'Strength Training', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop' },
    { name: 'Fat Loss Programs', img: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=1000&auto=format&fit=crop' },
    { name: 'Functional Fitness', img: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=1000&auto=format&fit=crop' },
    { name: 'Yoga & Mobility', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop' },
    { name: 'HIIT Classes', img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1000&auto=format&fit=crop' },
    { name: 'Personal Training', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop' }
  ];

  return (
    <section id="programs" className="section-padding" style={{ backgroundColor: 'var(--color-ivory)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>Our Programs</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>Elevate your routine with curated programs designed by industry experts.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem'
        }}>
          {programsList.map((prog, idx) => (
            <div key={idx} style={{
              position: 'relative',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              height: '300px',
              cursor: 'pointer'
            }}
            className="group"
            >
              <img src={prog.img} alt={prog.name} style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease'
              }} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                padding: '2rem',
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                color: 'var(--color-cream)',
                pointerEvents: 'none'
              }}>
                <h3 style={{ color: 'var(--color-cream)', fontSize: '1.5rem' }}>{prog.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
