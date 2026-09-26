import React from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const HomePage = ({ onNavigate, onSelectProduct }) => {
  const featuredProducts = [
    products.find((p) => p.id === 'khapli-wheat-atta'),
    products.find((p) => p.id === 'alsi-oil-flaxseed'),
    products.find((p) => p.id === 'salem-turmeric-powder'),
    products.find((p) => p.id === 'kalonji-oil-black-seed'),
    products.find((p) => p.id === 'black-wheat-atta'),
    products.find((p) => p.id === 'sweet-almond-oil-badam')
  ].filter(Boolean);

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          minHeight: '75vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--color-surface-container-low)',
          padding: '5rem 1.5rem',
          overflow: 'hidden',
          textAlign: 'center'
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/images/chakki-banner.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.18,
            mixBlendMode: 'multiply'
          }}
        />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '850px', margin: '0 auto' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <span className="organic-pill">Since 1984 &bull; Honest Heritage</span>
          </div>

          <h1 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
            Honoring Heritage, Harvesting Purity
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.2vw + 0.8rem, 1.3rem)',
              color: 'var(--color-on-surface-variant)',
              marginBottom: '2.5rem',
              maxWidth: '680px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.6
            }}
          >
            Experience the true essence of Indian staples. Stone-ground, cold-pressed, and cultivated with uncompromising dedication to traditional methods and natural purity.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <button
              className="btn btn-primary btn-lg"
              onClick={() => onNavigate('category', 'attas')}
            >
              <span>Shop Collections</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>

            <button
              className="btn btn-outline btn-lg"
              onClick={() => onNavigate('process')}
            >
              <span>Our Slow Process</span>
              <span className="material-symbols-outlined">history_edu</span>
            </button>
          </div>
        </div>
      </section>

      {/* Bento Grid: Our Core Ranges */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge-seal accent" style={{ marginBottom: '0.8rem' }}>
              Handcrafted Categories
            </span>
            <h2 style={{ marginBottom: '0.6rem' }}>Our Core Ranges</h2>
            <p style={{ maxWidth: '580px', margin: '0 auto' }}>
              Discover the foundational elements of a nourishing, traditional Indian kitchen.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '1.5rem'
            }}
          >
            {/* Bento Card 1: Atta (Large Left - 7 cols) */}
            <div
              style={{
                gridColumn: 'span 12',
                '@media (min-width: 900px)': { gridColumn: 'span 7' },
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                minHeight: '420px',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-card)',
                backgroundColor: 'var(--color-surface-container)'
              }}
              className="bento-box-large"
              onClick={() => onNavigate('category', 'attas')}
            >
              <img
                src="/images/attas-bowls.jpg"
                alt="Stone-Ground Atta"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s ease'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(22, 52, 34, 0.9) 0%, rgba(22, 52, 34, 0.2) 60%, transparent 100%)'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '2rem'
                }}
              >
                <div
                  style={{
                    backgroundColor: 'rgba(253, 249, 244, 0.95)',
                    backdropFilter: 'blur(8px)',
                    padding: '1.5rem 1.8rem',
                    borderRadius: 'var(--radius-md)',
                    maxWidth: '440px',
                    border: '1px solid var(--color-outline-variant)'
                  }}
                >
                  <span className="badge-seal" style={{ marginBottom: '0.4rem' }}>
                    Slow Stone Chakki
                  </span>
                  <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.4rem' }}>
                    Stone-Ground Atta
                  </h3>
                  <p style={{ fontSize: '0.88rem', marginBottom: '1rem', color: 'var(--color-on-surface-variant)' }}>
                    Milled slowly under 40°C to retain all natural wheat germ oils, fiber, and authentic nutty flavor.
                  </p>
                  <span
                    style={{
                      color: 'var(--color-secondary)',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em'
                    }}
                  >
                    Explore Grains <span className="material-symbols-outlined">arrow_forward</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Bento Right Column (5 cols) */}
            <div
              style={{
                gridColumn: 'span 12',
                '@media (min-width: 900px)': { gridColumn: 'span 5' },
                display: 'grid',
                gridTemplateRows: '1fr 1fr',
                gap: '1.5rem'
              }}
              className="bento-col-right"
            >
              {/* Spices Card */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  minHeight: '200px',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-card)',
                  backgroundColor: 'var(--color-surface-container)'
                }}
                onClick={() => onNavigate('category', 'spices')}
              >
                <img
                  src="/images/spices-trio.jpg"
                  alt="Pure Spices"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(151, 71, 39, 0.9) 0%, rgba(151, 71, 39, 0.3) 60%, transparent 100%)'
                  }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem' }}>
                  <div
                    style={{
                      backgroundColor: 'rgba(253, 249, 244, 0.95)',
                      backdropFilter: 'blur(8px)',
                      padding: '1.2rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-outline-variant)'
                    }}
                  >
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.2rem', color: 'var(--color-secondary)' }}>
                      Pure Single-Origin Spices
                    </h3>
                    <p style={{ fontSize: '0.82rem', marginBottom: '0.6rem' }}>
                      Salem high-curcumin haldi, Mathania chilli &amp; unpolished cumin.
                    </p>
                    <span style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      Shop Spices &rarr;
                    </span>
                  </div>
                </div>
              </div>

              {/* Oils Card */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  minHeight: '200px',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-card)',
                  backgroundColor: 'var(--color-surface-container)'
                }}
                onClick={() => onNavigate('category', 'oils')}
              >
                <img
                  src="/images/oils-banner.jpg"
                  alt="Cold-Pressed Oils"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(64, 42, 0, 0.9) 0%, rgba(64, 42, 0, 0.3) 60%, transparent 100%)'
                  }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem' }}>
                  <div
                    style={{
                      backgroundColor: 'rgba(253, 249, 244, 0.95)',
                      backdropFilter: 'blur(8px)',
                      padding: '1.2rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-outline-variant)'
                    }}
                  >
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.2rem', color: 'var(--color-tertiary)' }}>
                      Lakdi Ghani Wood-Pressed Oils
                    </h3>
                    <p style={{ fontSize: '0.82rem', marginBottom: '0.6rem' }}>
                      Crushed in wooden Kolhus without solvent chemicals or heat damage.
                    </p>
                    <span style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      Explore Oils &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Bestsellers */}
      <section style={{ backgroundColor: 'var(--color-surface-container-low)', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', gap: '1rem' }}>
            <div>
              <span className="badge-seal gold" style={{ marginBottom: '0.6rem' }}>
                Handpicked Daily
              </span>
              <h2>Featured Purity Staples</h2>
              <p>Freshly stone-ground and packed in eco-friendly glass &amp; kraft packaging.</p>
            </div>
            <button
              className="btn btn-outline btn-sm"
              onClick={() => onNavigate('category', 'attas')}
            >
              <span>View Full Pantry</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem'
            }}
          >
            {featuredProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onSelectProduct={onSelectProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* The Four Pillars of Purity */}
      <section style={{ padding: '5.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge-seal" style={{ marginBottom: '0.6rem' }}>
              The Purity Promise
            </span>
            <h2>Why Discerning Kitchens Choose Us</h2>
            <p style={{ maxWidth: '620px', margin: '0 auto' }}>
              We reject industrial high-temperature milling, chemical solvents, and cosmetic polishing.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem'
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--color-surface-container-lowest)',
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-outline-variant)',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(22, 52, 34, 0.1)',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem'
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '2rem' }}>
                  hourglass_bottom
                </span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>Slow Chakki Grinding</h3>
              <p style={{ fontSize: '0.88rem' }}>
                Rotated at slow RPM below 40°C to preserve heat-sensitive wheat germ, vitamins B &amp; E, and natural enzymatic integrity.
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-surface-container-lowest)',
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-outline-variant)',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(151, 71, 39, 0.1)',
                  color: 'var(--color-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem'
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '2rem' }}>
                  spa
                </span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>Single-Origin Spices</h3>
              <p style={{ fontSize: '0.88rem' }}>
                Directly sourced from indigenous agro-climates (Salem, Mathania, Kota). Free of artificial colorants or chemical sprays.
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-surface-container-lowest)',
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-outline-variant)',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(197, 155, 39, 0.12)',
                  color: '#7a5400',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem'
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '2rem' }}>
                  nature_people
                </span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>Direct Farmer Equity</h3>
              <p style={{ fontSize: '0.88rem' }}>
                We pay 35% above market mandi rates to certified regenerative smallholder farmers, ensuring transparent, honest heritage.
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-surface-container-lowest)',
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-outline-variant)',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(34, 103, 56, 0.1)',
                  color: 'var(--color-success)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem'
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '2rem' }}>
                  verified
                </span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>Batch Lab Certified</h3>
              <p style={{ fontSize: '0.88rem' }}>
                Every single harvest lot is independently lab-verified for active curcumin, pesticide residue (0.00%), and moisture purity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Farmer Story Spotlight */}
      <section
        style={{
          backgroundColor: 'var(--color-primary)',
          color: '#fff',
          padding: '5rem 0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center'
            }}
          >
            <div>
              <span className="badge-seal" style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#fff', borderColor: 'rgba(255,255,255,0.25)', marginBottom: '1rem' }}>
                Farmer Partnership &bull; Marwar Cooperative
              </span>
              <h2 style={{ color: '#fff', marginBottom: '1.2rem' }}>
                "We Don't Force Nature; We Harvest When The Sun Decides."
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Meet Ramlal Ji and his family in Mathania, Rajasthan. For three generations, they have protected the ancient non-hybrid red chilli seeds, sun-drying every pods on clean woven cot mats before hand-sorting.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  className="btn btn-secondary"
                  onClick={() => onNavigate('farmers')}
                >
                  <span>Read Farmer Stories</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <img
                src="/images/rajasthan-farmers.jpg"
                alt="Artisanal Indian spice farmers in Rajasthan"
                style={{
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-hover)',
                  width: '100%',
                  maxHeight: '440px',
                  objectFit: 'cover'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: '20px',
                  backgroundColor: 'var(--color-surface)',
                  color: 'var(--color-primary)',
                  padding: '1rem 1.4rem',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-card)',
                  maxWidth: '240px'
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>450+ Heritage Farmers</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-subtle)' }}>Across 6 agro-climatic zones in India</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Trust Quote */}
      <section style={{ padding: '5rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: 'var(--color-secondary)', opacity: 0.5 }}>
            format_quote
          </span>
          <blockquote
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.2rem, 1.5vw + 0.8rem, 1.65rem)',
              color: 'var(--color-primary)',
              lineHeight: 1.5,
              marginBottom: '1.5rem',
              fontStyle: 'italic'
            }}
          >
            "Switching to Jain Desi &amp; Pure Khapli Atta and Cold-Pressed Sarson Oil brought back the exact taste and digestibility of my grandmother's village kitchen. You can literally smell the freshness."
          </blockquote>
          <div style={{ fontWeight: 600, color: 'var(--color-secondary)' }}>Dr. Meenakshi Sundaram</div>
          <div style={{ fontSize: '0.82rem', color: 'var(--color-text-subtle)' }}>Ayurvedic Physician &bull; Bengaluru</div>
        </div>
      </section>
    </div>
  );
};
