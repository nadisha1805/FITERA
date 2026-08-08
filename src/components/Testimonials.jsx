import React from 'react';

const Testimonials = () => {
  const reviews = [
    { name: 'Sarah J.', role: 'Member since 2023', text: '"FITERA has completely transformed my approach to wellness. The trainers are exceptional and the facility feels like a luxury retreat."', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop' },
    { name: 'Michael T.', role: 'Member since 2022', text: '"The best gym experience I\'ve ever had. The attention to detail, from the equipment to the locker rooms, is unmatched."', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop' },
    { name: 'Elena R.', role: 'Member since 2024', text: '"I love the holistic approach here. It\'s not just about lifting weights; it\'s about overall wellbeing and mobility."', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop' }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-beige)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>Success Stories</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>Hear from our community of members who have transformed their lives.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {reviews.map((review, idx) => (
            <div key={idx} style={{
              backgroundColor: 'var(--color-cream)',
              padding: '3rem 2rem',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <p style={{ fontStyle: 'italic', fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--color-text-secondary)' }}>
                {review.text}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                <img src={review.img} alt={review.name} style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} />
                <div style={{ textAlign: 'left' }}>
                  <h4 style={{ margin: 0, fontSize: '1rem', fontFamily: 'var(--font-body)', fontWeight: '600' }}>{review.name}</h4>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-taupe)' }}>{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
