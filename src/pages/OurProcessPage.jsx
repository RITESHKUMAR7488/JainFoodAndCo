import React from 'react';

export const OurProcessPage = ({ onNavigate }) => {
  const steps = [
    {
      num: '01',
      title: 'Heirloom Seed Preservation & Organic Sowing',
      desc: 'We partner with farmers who save their own indigenous native seeds—like Emmer Khapli wheat and Salem turmeric rhizomes—cultivated without synthetic NPK fertilizers, GMO engineering, or systemic pesticides.',
      tag: 'Field Sourcing'
    },
    {
      num: '02',
      title: 'Traditional Sun-Drying & Triple Air Cleaning',
      desc: 'Instead of aggressive petroleum-fired industrial dehydrators that scorch volatile aromatic compounds, our grains and spices dry gently under the warm Indian sun on clean woven cot mats, followed by triple manual sieving.',
      tag: 'Natural Preparation'
    },
    {
      num: '03',
      title: 'Slow-Speed Heavy Stone Chakki Milling',
      desc: 'Industrial roller mills run at 1200+ RPM creating intense friction heat (>90°C) that destroys wheat germ oil. Our natural stone chakkis operate at a gentle 80-120 RPM, never exceeding 40°C, ensuring all living bran and germ remain integral.',
      tag: 'Atta Milled Below 40°C'
    },
    {
      num: '04',
      title: 'Artisanal Lakdi Ghani Wood-Mortar Oil Extraction',
      desc: 'Traditional wood-pressed oils are crushed inside heavy Neem or Vaagai wooden mortars rotated slowly. The natural wood absorbs friction heat, extracting first-press virgin oil below 35°C without chemical solvent hexanes.',
      tag: 'Cold Press Kolhu'
    },
    {
      num: '05',
      title: 'Zero Chemical Refining & Eco-Glass Bottling',
      desc: 'Our oils settle naturally by gravity over 48 hours—never bleached with diatomaceous earth or deodorized with harsh steam. Packed in UV-protective dark glass bottles and unbleached food-grade kraft pouches.',
      tag: 'Packaging Purity'
    }
  ];

  return (
    <div>
      {/* Process Hero */}
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
            backgroundImage: 'url(/images/process-ghani.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
            mixBlendMode: 'multiply'
          }}
        />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
          <span className="organic-pill" style={{ marginBottom: '1rem' }}>
            Authentic Indian Craftsmanship
          </span>
          <h1 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
            Our Traditional Process: Preserving What Industry Destroys
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}>
            Modern industrial processing prioritizes speed and cosmetic shelf life over human nutrition. At Jain Desi &amp; Pure, we preserve the slow, honorable methods that made Indian culinary staples the world's most nourishing.
          </p>
        </div>
      </section>

      {/* Step by Step Timeline */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '880px', margin: '0 auto' }}>
            {steps.map((step, idx) => (
              <div
                key={step.num}
                style={{
                  display: 'flex',
                  gap: '2rem',
                  marginBottom: '3rem',
                  alignItems: 'flex-start'
                }}
              >
                {/* Number Circle */}
                <div
                  style={{
                    flexShrink: 0,
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-primary)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    boxShadow: 'var(--shadow-card)'
                  }}
                >
                  {step.num}
                </div>

                {/* Content */}
                <div
                  style={{
                    backgroundColor: 'var(--color-surface-container-lowest)',
                    padding: '2rem',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--color-outline-variant)',
                    boxShadow: 'var(--shadow-subtle)',
                    flexGrow: 1
                  }}
                >
                  <span className="badge-seal accent" style={{ marginBottom: '0.6rem' }}>
                    {step.tag}
                  </span>
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.6rem', color: 'var(--color-primary)' }}>
                    {step.title}
                  </h3>
                  <p style={{ lineHeight: 1.7, fontSize: '0.95rem' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Workshop Visual Showcase */}
          <div
            style={{
              marginTop: '4rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem'
            }}
          >
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
              <img src="/images/process-ghani.jpg" alt="Artisan Ghani Workshop" style={{ width: '100%', height: '320px', objectFit: 'cover' }} />
              <div style={{ padding: '1.25rem', backgroundColor: 'var(--color-surface-container-low)' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.3rem' }}>The Wooden Lakdi Ghani</h4>
                <p style={{ fontSize: '0.85rem' }}>Slow rotating wooden pestles extract oil drop-by-drop below 35°C without friction heat.</p>
              </div>
            </div>

            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
              <img src="/images/chakki-banner.jpg" alt="Stone Chakki Milling" style={{ width: '100%', height: '320px', objectFit: 'cover' }} />
              <div style={{ padding: '1.25rem', backgroundColor: 'var(--color-surface-container-low)' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.3rem' }}>Heavy Natural Grinding Stones</h4>
                <p style={{ fontSize: '0.85rem' }}>Slow-milled flour leaves the natural wheat germ, aleurone layer, and living enzymes intact.</p>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div
            style={{
              marginTop: '5rem',
              textAlign: 'center',
              backgroundColor: 'var(--color-primary)',
              color: '#fff',
              padding: '3.5rem 2rem',
              borderRadius: 'var(--radius-xl)'
            }}
          >
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Taste The Freshly Milled Difference</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '580px', margin: '0 auto 2rem' }}>
              We mill and press fresh every morning upon receiving your order. Experience staples the way your ancestors did.
            </p>
            <button
              className="btn btn-secondary btn-lg"
              onClick={() => onNavigate('category', 'attas')}
            >
              <span>Explore The Fresh Pantry</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
