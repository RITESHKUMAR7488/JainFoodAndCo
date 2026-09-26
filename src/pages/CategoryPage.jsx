import React, { useState } from 'react';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const CategoryPage = ({ categoryId, onSelectProduct, onNavigate }) => {
  const currentCategory = categories.find((c) => c.id === categoryId) || categories[0];
  const categoryProducts = products.filter((p) => p.category === currentCategory.id);

  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Filters setup based on category
  const filterOptions = {
    attas: [
      { id: 'all', label: 'All Flours' },
      { id: 'ancient', label: 'Ancient Grains' },
      { id: 'low-gi', label: 'Low GI / Diabetic Friendly' },
      { id: 'seasonal', label: 'Summer Blends' }
    ],
    spices: [
      { id: 'all', label: 'All Spices' },
      { id: 'whole', label: 'Whole Seeds' },
      { id: 'ground', label: 'Stone-Pounded Powders' },
      { id: 'curcumin', label: 'High Curcumin' }
    ],
    oils: [
      { id: 'all', label: 'All Pure Oils' },
      { id: 'omega3', label: 'Rich in Omega-3 (Alsi)' },
      { id: 'immunity', label: 'Therapeutic Immunity (Kalonji)' },
      { id: 'nutritive', label: 'Edible Badam (Almond)' },
      { id: 'staples', label: 'Everyday Cooking (Mustard/Peanut)' }
    ]
  };

  const currentFilters = filterOptions[currentCategory.id] || [{ id: 'all', label: 'All Items' }];

  // Filter products
  const filteredProducts = categoryProducts.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ancient') return p.id.includes('khapli') || p.id.includes('black');
    if (activeFilter === 'low-gi') return p.id.includes('khapli') || p.id.includes('multigrain');
    if (activeFilter === 'seasonal') return p.id.includes('multigrain');
    if (activeFilter === 'whole') return p.id.includes('seeds') || p.id.includes('coriander') || p.id.includes('cumin');
    if (activeFilter === 'ground') return p.id.includes('powder') || p.id.includes('turmeric') || p.id.includes('chilli');
    if (activeFilter === 'curcumin') return p.id.includes('turmeric');
    
    // Oil filters
    if (activeFilter === 'omega3') return p.id.includes('alsi') || p.id.includes('flaxseed');
    if (activeFilter === 'immunity') return p.id.includes('kalonji');
    if (activeFilter === 'nutritive') return p.id.includes('almond');
    if (activeFilter === 'staples') return p.id.includes('mustard') || p.id.includes('groundnut');
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // default featured
  });

  const isOilsCategory = currentCategory.id === 'oils';

  return (
    <div>
      {/* Category Hero Banner */}
      {isOilsCategory ? (
        /* Renovated Stitch Cold-Pressed Oils Editorial Hero */
        <section
          style={{
            position: 'relative',
            backgroundColor: 'var(--color-surface-container-high)',
            padding: '4rem 1.5rem',
            borderBottom: '1px solid var(--color-outline-variant)',
            overflow: 'hidden'
          }}
        >
          <div className="container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '3rem',
                alignItems: 'center'
              }}
            >
              {/* Left Editorial Story */}
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.9rem', borderRadius: 'var(--radius-full)', backgroundColor: 'var(--color-secondary-container)', color: 'var(--color-on-secondary-container)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '1.1rem', color: 'var(--color-secondary)' }}>
                    eco
                  </span>
                  <span>Traditional Lakdi Ghani</span>
                </div>

                <h1 style={{ color: 'var(--color-primary)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                  Cold-Pressed Oils
                </h1>

                <p style={{ fontSize: '1.1rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '580px' }}>
                  Pure, unrefined, single-pressed oils extracted using traditional wooden chakkis (Lakdi Ghani) below 38°C. Preserving delicate nutrients, natural antioxidants, and essential fatty acids for complete family wellness.
                </p>

                {/* Badges Row */}
                <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', backgroundColor: 'var(--color-surface)', padding: '0.75rem 1.25rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-subtle)', border: '1px solid var(--color-outline-variant)' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'var(--color-primary-fixed)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>thermostat</span>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-primary)' }}>&lt; 38°C Extraction</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-text-subtle)' }}>Zero Friction Heat</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', backgroundColor: 'var(--color-surface)', padding: '0.75rem 1.25rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-subtle)', border: '1px solid var(--color-outline-variant)' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'rgba(151, 71, 39, 0.15)', color: 'var(--color-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>water_drop</span>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-secondary)' }}>Unrefined Purity</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-text-subtle)' }}>100% First Press</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Photographic Showcase */}
              <div style={{ position: 'relative' }}>
                <div
                  style={{
                    position: 'relative',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-hover)',
                    aspectRatio: '16 / 10',
                    backgroundColor: 'var(--color-surface-container)'
                  }}
                >
                  <img
                    src="/images/oils-banner.jpg"
                    alt="Authentic wooden Lakdi Ghani oil extraction workshop"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(22, 52, 34, 0.6) 0%, transparent 60%)'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      left: '16px',
                      right: '16px',
                      padding: '1rem 1.25rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'rgba(253, 249, 244, 0.94)',
                      backdropFilter: 'blur(8px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      border: '1px solid var(--color-outline-variant)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span className="material-symbols-outlined" style={{ color: 'var(--color-secondary)', fontSize: '1.5rem' }}>
                        verified
                      </span>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          Authentic Wooden Mill
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-subtle)' }}>Naturally settled &amp; unbleached cloth filtered</div>
                      </div>
                    </div>
                    <span className="badge-seal" style={{ backgroundColor: 'transparent', color: 'var(--color-secondary)', fontWeight: 700 }}>
                      100% Desi
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* Standard Banner for Attas and Spices */
        <section
          style={{
            position: 'relative',
            padding: '4.5rem 1.5rem',
            backgroundColor: 'var(--color-surface-container-low)',
            borderBottom: '1px solid var(--color-outline-variant)',
            textAlign: 'center',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${currentCategory.banner})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.16,
              mixBlendMode: 'multiply'
            }}
          />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '780px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span className="badge-seal" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-outline-variant)' }}>
                100% Honest Heritage
              </span>
            </div>

            <h1 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
              {currentCategory.name}
            </h1>

            <p style={{ fontSize: '1.1rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}>
              {currentCategory.tagline}
            </p>
          </div>
        </section>
      )}

      {/* Main Listing Section */}
      <section style={{ padding: '3.5rem 0 5rem' }}>
        <div className="container">
          {/* Controls Bar: Filters & Sort */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1.2rem',
              marginBottom: '2.5rem',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid var(--color-surface-container-high)'
            }}
          >
            {/* Filter Pills */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {currentFilters.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  style={{
                    padding: '0.45rem 1rem',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    borderRadius: 'var(--radius-full)',
                    border: activeFilter === tab.id ? '1px solid var(--color-primary)' : '1px solid var(--color-outline-variant)',
                    backgroundColor: activeFilter === tab.id ? 'var(--color-primary)' : 'var(--color-surface)',
                    color: activeFilter === tab.id ? '#fff' : 'var(--color-on-surface)',
                    transition: 'all var(--transition-smooth)'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Sort Dropdown & Count */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '0.82rem', color: 'var(--color-text-subtle)' }}>
                Showing {sortedProducts.length} {isOilsCategory ? 'pure cold-pressed oils' : 'staples'}
              </span>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  padding: '0.45rem 0.8rem',
                  fontSize: '0.82rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-outline-variant)',
                  backgroundColor: 'var(--color-surface)',
                  fontWeight: 500
                }}
              >
                <option value="featured">Sort by: Traditional Press</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Customer Rating</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem'
            }}
          >
            {sortedProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onSelectProduct={onSelectProduct}
              />
            ))}
          </div>

          {/* Value Strip for Oils (matching Stitch oils screen) */}
          {isOilsCategory && (
            <div
              style={{
                marginTop: '5rem',
                backgroundColor: 'var(--color-surface-container)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(2rem, 3vw, 3.5rem)',
                border: '1px solid var(--color-outline-variant)'
              }}
            >
              <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3rem' }}>
                <span className="font-label-sm" style={{ color: 'var(--color-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>
                  No Heat. No Hexane. No Compromise.
                </span>
                <h2>The Cold-Pressed Lakdi Ghani Standard</h2>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '1.8rem'
                }}
              >
                <div style={{ backgroundColor: 'var(--color-surface)', padding: '1.8rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-subtle)', border: '1px solid var(--color-outline-variant)' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-surface-container-high)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', marginBottom: '1.25rem' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '1.6rem' }}>cyclone</span>
                  </div>
                  <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Wood-Pressed (&lt;38°C)</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}>
                    Pressed slowly inside neem and vaagai wooden mortars without friction heat to keep natural plant nutrients and enzymes active.
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--color-surface)', padding: '1.8rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-subtle)', border: '1px solid var(--color-outline-variant)' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-surface-container-high)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-secondary)', marginBottom: '1.25rem' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '1.6rem' }}>sanitizer</span>
                  </div>
                  <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Zero Chemical Solvents</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}>
                    Never extracted using petroleum-derived hexane solvents or chemically neutralized with caustic soda. 100% pure seed press.
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--color-surface)', padding: '1.8rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-subtle)', border: '1px solid var(--color-outline-variant)' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-surface-container-high)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7a5400', marginBottom: '1.25rem' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '1.6rem' }}>filter_alt</span>
                  </div>
                  <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Gravity Settlement</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}>
                    Crude oil rests undisturbed for 48 hours to naturally settle seed particulates, followed by light filtration through unbleached cotton.
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--color-surface)', padding: '1.8rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-subtle)', border: '1px solid var(--color-outline-variant)' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-surface-container-high)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-success)', marginBottom: '1.25rem' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '1.6rem' }}>shield</span>
                  </div>
                  <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Amber Glass Protection</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}>
                    Bottled in thick amber glass with cork stoppers to prevent photo-oxidation and microplastic leaching into your family's food.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Educational Comparison Section matching Stitch Category Pages */}
          <div
            style={{
              marginTop: '4rem',
              backgroundColor: 'var(--color-surface-container-low)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(1.5rem, 3vw, 3rem)',
              border: '1px solid var(--color-outline-variant)'
            }}
          >
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2.5rem' }}>
              <span className="badge-seal accent" style={{ marginBottom: '0.6rem' }}>
                The Purity Difference
              </span>
              <h3>
                {currentCategory.id === 'attas'
                  ? 'Modern High-Speed Roller Mills vs. Jain Slow Stone Chakki'
                  : currentCategory.id === 'spices'
                  ? 'Market Polished Spices vs. Jain Single-Origin Spices'
                  : 'Refined Solvent Oils vs. Jain Lakdi Ghani Wood-Pressed'}
              </h3>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem'
              }}
            >
              {/* Conventional Column */}
              <div
                style={{
                  backgroundColor: 'var(--color-surface)',
                  padding: '1.8rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-outline-variant)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-error)' }}>
                  <span className="material-symbols-outlined">cancel</span>
                  <h4 style={{ color: 'var(--color-error)' }}>Conventional Industrial Processing</h4>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.88rem', color: 'var(--color-on-surface-variant)' }}>
                  <li>&bull; Grinding at high friction exceeding 90°C, stripping heat-sensitive vitamins and natural aroma.</li>
                  <li>&bull; Chemically extracted with petrochemical hexane solvents at elevated temperatures (140°C).</li>
                  <li>&bull; Artificially bleached and deodorized with caustic soda and phosphoric acid.</li>
                  <li>&bull; Stored in low-grade transparent PET plastic bottles vulnerable to oxidation.</li>
                </ul>
              </div>

              {/* Jain Desi & Pure Column */}
              <div
                style={{
                  backgroundColor: 'rgba(22, 52, 34, 0.05)',
                  padding: '1.8rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1.5px solid var(--color-primary)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
                  <span className="material-symbols-outlined">check_circle</span>
                  <h4 style={{ color: 'var(--color-primary)' }}>Jain Desi &amp; Pure Traditional Method</h4>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.88rem', color: 'var(--color-on-surface)' }}>
                  <li>&bull; Crushed slowly below 38°C in traditional wooden Kolhus with zero friction burn.</li>
                  <li>&bull; 100% Unrefined, unbleached, and free from any chemical solvents or deodorizers.</li>
                  <li>&bull; Preserves natural plant sterols, active Vitamin E, and essential Omega fatty acids.</li>
                  <li>&bull; Bottled in protective amber apothecary glass with airtight cork closure.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
