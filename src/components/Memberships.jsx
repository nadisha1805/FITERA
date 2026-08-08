import React from 'react';

const Memberships = ({ onJoinClick }) => {
  const plans = [
    { name: 'Basic', price: '$89', period: '/month', features: ['Access to gym floor', 'Locker room access', '1 free personal training session'] },
    { name: 'Premium', price: '$149', period: '/month', highlighted: true, features: ['All Basic features', 'Unlimited group classes', 'Sauna & spa access', 'Monthly fitness assessment'] },
    { name: 'Elite', price: '$249', period: '/month', features: ['All Premium features', '4 personal training sessions/mo', 'Nutrition planning', 'Priority booking'] }
  ];

  return (
    <section id="memberships" className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>Membership Plans</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>Choose the tier that best supports your fitness and wellness goals.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          alignItems: 'center'
        }}>
          {plans.map((plan, idx) => (
            <div key={idx} style={{
              padding: plan.highlighted ? '4rem 2rem' : '3rem 2rem',
              backgroundColor: plan.highlighted ? 'var(--color-rosegold)' : 'var(--color-ivory)',
              color: plan.highlighted ? 'var(--color-cream)' : 'var(--color-text-primary)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: plan.highlighted ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
              transform: plan.highlighted ? 'scale(1.05)' : 'none',
              textAlign: 'center',
              position: 'relative',
              zIndex: plan.highlighted ? 10 : 1
            }}>
              {plan.highlighted && (
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: 'var(--color-text-primary)',
                  color: 'var(--color-cream)',
                  padding: '0.25rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Recommended
                </div>
              )}
              <h3 style={{ color: 'inherit', marginBottom: '1rem', fontSize: '1.75rem' }}>{plan.name}</h3>
              <div style={{ marginBottom: '2rem' }}>
                <span style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', fontWeight: '600' }}>{plan.price}</span>
                <span style={{ opacity: 0.8 }}>{plan.period}</span>
              </div>
              
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2.5rem', textAlign: 'left' }}>
                {plan.features.map((feat, i) => (
                  <li key={i} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{ color: plan.highlighted ? 'var(--color-cream)' : 'var(--color-rosegold)' }}>✓</span>
                    <span style={{ opacity: 0.9 }}>{feat}</span>
                  </li>
                ))}
              </ul>

              <button className={plan.highlighted ? 'btn btn-outline' : 'btn btn-primary'} onClick={onJoinClick} style={{
                width: '100%',
                borderColor: plan.highlighted ? 'var(--color-cream)' : 'var(--color-rosegold)',
                color: plan.highlighted ? 'var(--color-cream)' : 'var(--color-text-light)'
              }}>
                Join Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Memberships;
