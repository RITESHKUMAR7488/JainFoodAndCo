import React from 'react';

export const FarmerStoriesPage = ({ onNavigate }) => {
  const farmers = [
    {
      name: 'Ramlal & Shanti Devi',
      region: 'Mathania, Jodhpur (Rajasthan)',
      crop: 'Marwar Heirloom Red Chilli',
      experience: '42 Years of Traditional Farming',
      image: '/images/rajasthan-farmers.jpg',
      quote: 'Mathania red chillies get their brilliant natural crimson color from the arid desert sunlight. We do not use chemical coloring dyes because we feed this same spice to our own grandchildren.'
    },
    {
      name: 'Baburao Patil',
      region: 'Satara Heartland (Maharashtra)',
      crop: 'Ancient Emmer Khapli Wheat',
      experience: '28 Years of Native Grains',
      image: '/images/mustard-farmers.jpg',
      quote: 'Khapli was grown here before hybrid dwarf wheat came in the 1960s. Its roots go 6 feet deep, pulling natural minerals from the black volcanic soil. You eat one roti and you feel energetic till evening.'
    },
    {
      name: 'Murugan & Lakshmi',
      region: 'Salem Riverbed (Tamil Nadu)',
      crop: 'Heirloom High-Curcumin Turmeric (Haldi)',
      experience: '35 Years of Spice Agriculture',
      image: '/images/spices-bowls.jpg',
      quote: 'True Salem turmeric rhizomes are dark golden inside, not neon yellow. When you boil it in cow milk, it leaves a pleasant earthy warmth without any throat tickle.'
    }
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section
        style={{
          position: 'relative',
          padding: '5rem 1.5rem',
          backgroundColor: 'var(--color-surface-container-low)',
          textAlign: 'center',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/images/mustard-farmers.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.16,
            mixBlendMode: 'multiply'
          }}
        />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '820px', margin: '0 auto' }}>
          <span className="organic-pill" style={{ marginBottom: '1rem' }}>
            Direct Farmer Lineage
          </span>
          <h1 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
            The Hands That Sow, The Hearts That Protect
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}>
            Behind every pouch of Jain Desi &amp; Pure is an indigenous farming family committed to chemical-free agriculture, native heirloom seeds, and transparent generational honesty.
          </p>
        </div>
      </section>

      {/* Fair Equity Charter */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: 'rgba(22, 52, 34, 0.05)',
              padding: '2.5rem',
              borderRadius: 'var(--radius-xl)',
              border: '1.5px solid var(--color-primary)',
              marginBottom: '4.5rem'
            }}
          >
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2rem' }}>
              <span className="badge-seal" style={{ marginBottom: '0.5rem' }}>
                Farmer Equity Charter
              </span>
              <h2 style={{ fontSize: '1.8rem' }}>How We Stand By Our Farmers</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', textAlign: 'center' }}>
              <div>
                <div style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--color-secondary)', fontFamily: 'var(--font-serif)', marginBottom: '0.4rem' }}>
                  +35%
                </div>
                <div style={{ fontWeight: 600, color: 'var(--color-primary)', marginBottom: '0.3rem' }}>Above Mandi Minimum Rates</div>
                <p style={{ fontSize: '0.85rem' }}>Guaranteed pre-harvest procurement contracts shielding families from market price crashes.</p>
              </div>

              <div>
                <div style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--color-secondary)', fontFamily: 'var(--font-serif)', marginBottom: '0.4rem' }}>
                  0%
                </div>
                <div style={{ fontWeight: 600, color: 'var(--color-primary)', marginBottom: '0.3rem' }}>Synthetic Chemical Tolerance</div>
                <p style={{ fontSize: '0.85rem' }}>Soil testing and neem-based organic bio-pest training provided free of cost.</p>
              </div>

              <div>
                <div style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--color-secondary)', fontFamily: 'var(--font-serif)', marginBottom: '0.4rem' }}>
                  450+
                </div>
                <div style={{ fontWeight: 600, color: 'var(--color-primary)', marginBottom: '0.3rem' }}>Cooperative Family Partners</div>
                <p style={{ fontSize: '0.85rem' }}>Organized across Rajasthan, Gujarat, Maharashtra, and Madhya Pradesh micro-climates.</p>
              </div>
            </div>
          </div>

          {/* Individual Farmer Stories Cards */}
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Partner Profiles from the Soil</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {farmers.map((farmer, index) => (
              <div
                key={farmer.name}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '2.5rem',
                  alignItems: 'center',
                  backgroundColor: 'var(--color-surface-container-low)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2rem',
                  border: '1px solid var(--color-outline-variant)'
                }}
              >
                <div style={{ order: index % 2 === 1 ? 2 : 1 }}>
                  <img
                    src={farmer.image}
                    alt={farmer.name}
                    style={{
                      borderRadius: 'var(--radius-lg)',
                      width: '100%',
                      height: '340px',
                      objectFit: 'cover',
                      boxShadow: 'var(--shadow-card)'
                    }}
                  />
                </div>

                <div style={{ order: index % 2 === 1 ? 1 : 2 }}>
                  <span className="badge-seal accent" style={{ marginBottom: '0.5rem' }}>
                    {farmer.crop}
                  </span>
                  <h3 style={{ fontSize: '1.6rem', color: 'var(--color-primary)', marginBottom: '0.4rem' }}>
                    {farmer.name}
                  </h3>
                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--color-text-subtle)', marginBottom: '1.25rem' }}>
                    <span>📍 {farmer.region}</span>
                    <span>&bull;</span>
                    <span>🌾 {farmer.experience}</span>
                  </div>

                  <blockquote
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.1rem',
                      fontStyle: 'italic',
                      lineHeight: 1.6,
                      color: 'var(--color-primary)',
                      borderLeft: '3px solid var(--color-secondary)',
                      paddingLeft: '1.2rem',
                      marginBottom: '1.5rem'
                    }}
                  >
                    "{farmer.quote}"
                  </blockquote>

                  <button
                    className="btn btn-outline btn-sm"
                    onClick={() => onNavigate('category', 'attas')}
                  >
                    <span>Support This Harvest</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
