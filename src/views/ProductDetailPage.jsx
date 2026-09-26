'use client';
import React, { useState, useEffect } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/ProductCard';

export const ProductDetailPage = ({ productId, onNavigate, onSelectProduct }) => {
  const product = products.find((p) => p.id === productId) || products[0];
  const { addItem, setIsCheckoutOpen } = useCart();

  const [activeImage, setActiveImage] = useState(product.image);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('benefits');

  useEffect(() => {
    setActiveImage(product.image);
    const popIdx = product.sizes?.findIndex((s) => s.popular);
    setSelectedSizeIndex(popIdx !== -1 && popIdx !== undefined ? popIdx : 0);
    setQuantity(1);
  }, [product]);

  const currentSize = product.sizes?.[selectedSizeIndex] || { label: 'Standard', price: product.price };
  const currentPrice = currentSize.price || product.price;

  const handleAdd = () => {
    addItem(product, currentSize, quantity);
  };

  const handleBuyNow = () => {
    addItem(product, currentSize, quantity);
    setIsCheckoutOpen(true);
  };

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div style={{ padding: '2.5rem 0 5rem' }}>
      <div className="container">
        {/* Top Breadcrumb & Batch Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-subtle)' }}>
            <button onClick={() => onNavigate('home')} style={{ color: 'var(--color-primary)' }}>
              Home
            </button>
            <span>/</span>
            <button onClick={() => onNavigate('category', product.category)} style={{ color: 'var(--color-primary)' }}>
              {product.categoryName}
            </button>
            <span>/</span>
            <span style={{ color: 'var(--color-secondary)', fontWeight: 600 }}>{product.name}</span>
          </div>

          {/* Batch Verification Tag matching Stitch */}
          <div className="badge-seal" style={{ backgroundColor: 'rgba(151, 71, 39, 0.08)', color: 'var(--color-secondary)', borderColor: 'rgba(151, 71, 39, 0.25)' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>verified</span>
            <span>Batch: {product.batchId || 'JDP-HERITAGE-2024'} &bull; Lab Verified Chemical-Free</span>
          </div>
        </div>

        {/* Product Hero Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'start',
            marginBottom: '4rem'
          }}
        >
          {/* Left: Gallery */}
          <div>
            <div
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                backgroundColor: 'var(--color-surface-container-low)',
                border: '1px solid var(--color-outline-variant)',
                marginBottom: '1rem',
                aspectRatio: '1 / 1',
                boxShadow: 'var(--shadow-card)',
                position: 'relative'
              }}
            >
              <img
                src={activeImage}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />

              {/* Asymmetrical Trust Badges matching Stitch */}
              <div style={{ position: 'absolute', top: '16px', left: '16px', display: 'flex', flexDirection: 'column', gap: '0.4rem', pointerEvents: 'none' }}>
                {product.category === 'oils' ? (
                  <>
                    <span className="badge-seal" style={{ backgroundColor: 'var(--color-primary)', color: '#fff', borderColor: 'var(--color-primary)' }}>
                      100% Wood Pressed
                    </span>
                    <span className="badge-seal accent">
                      Lakdi Ghani Fresh
                    </span>
                  </>
                ) : (
                  product.badge && <span className="card-badge" style={{ position: 'static' }}>{product.badge}</span>
                )}
              </div>
            </div>

            {/* Thumbnails */}
            <div style={{ display: 'flex', gap: '0.8rem' }}>
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: activeImage === product.image ? '2px solid var(--color-primary)' : '1px solid var(--color-outline-variant)'
                }}
                onClick={() => setActiveImage(product.image)}
              >
                <img src={product.image} alt="Thumbnail 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              {product.secondaryImage && (
                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: activeImage === product.secondaryImage ? '2px solid var(--color-primary)' : '1px solid var(--color-outline-variant)'
                  }}
                  onClick={() => setActiveImage(product.secondaryImage)}
                >
                  <img src={product.secondaryImage} alt="Thumbnail 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              )}
            </div>
          </div>

          {/* Right: Product Buy Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
              <span className="badge-seal" style={{ backgroundColor: 'transparent' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '1rem', color: 'var(--color-secondary)' }}>
                  location_on
                </span>
                {product.origin}
              </span>
              <span className="badge-seal gold">
                100% Honest Heritage
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)', marginBottom: '0.5rem', lineHeight: 1.2 }}>
              {product.name}
            </h1>

            <p style={{ fontSize: '1rem', color: 'var(--color-on-surface-variant)', marginBottom: '1.25rem' }}>
              {product.subheading}
            </p>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', color: '#f59e0b' }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined" style={{ fontSize: '1.2rem', fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                ))}
              </div>
              <span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>{product.rating.toFixed(1)}</span>
              <span style={{ color: 'var(--color-text-subtle)' }}>({product.reviewsCount} verified reviews)</span>
            </div>

            {/* Price Box */}
            <div
              style={{
                backgroundColor: 'var(--color-surface-container-low)',
                padding: '1.25rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                marginBottom: '1.75rem',
                border: '1px solid var(--color-outline-variant)',
                display: 'flex',
                alignItems: 'baseline',
                gap: '1rem'
              }}
            >
              <div style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: 'var(--color-primary)' }}>
                ₹{currentPrice}
              </div>
              {product.originalPrice && (
                <div style={{ fontSize: '1.1rem', color: 'var(--color-text-subtle)', textDecoration: 'line-through' }}>
                  ₹{Math.round((product.originalPrice / product.price) * currentPrice)}
                </div>
              )}
              <span className="badge-seal accent">Inclusive of all taxes &bull; Fresh First Press</span>
            </div>

            {/* Pack Size Selection */}
            {product.sizes && (
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Choose Pack Size:
                </label>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  {product.sizes.map((sz, index) => (
                    <button
                      key={sz.label}
                      type="button"
                      onClick={() => setSelectedSizeIndex(index)}
                      style={{
                        padding: '0.6rem 1.2rem',
                        borderRadius: 'var(--radius-sm)',
                        fontWeight: selectedSizeIndex === index ? 700 : 500,
                        border: selectedSizeIndex === index ? '2px solid var(--color-primary)' : '1px solid var(--color-outline-variant)',
                        backgroundColor: selectedSizeIndex === index ? 'var(--color-primary)' : 'var(--color-surface)',
                        color: selectedSizeIndex === index ? '#fff' : 'var(--color-on-surface)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.1rem',
                        transition: 'all var(--transition-smooth)'
                      }}
                    >
                      <span style={{ fontSize: '0.9rem' }}>{sz.label}</span>
                      <span style={{ fontSize: '0.75rem', opacity: selectedSizeIndex === index ? 0.9 : 0.7 }}>₹{sz.price}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & CTA Buttons */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <div className="qty-control" style={{ height: '46px' }}>
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{ width: '38px', height: '44px', fontSize: '1.1rem' }}
                >
                  -
                </button>
                <span style={{ padding: '0 1rem', fontSize: '1rem' }}>{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  style={{ width: '38px', height: '44px', fontSize: '1.1rem' }}
                >
                  +
                </button>
              </div>

              <button
                className="btn btn-primary btn-lg"
                style={{ flexGrow: 1, minWidth: '180px' }}
                onClick={handleAdd}
              >
                <span className="material-symbols-outlined">add_shopping_cart</span>
                <span>Add to Basket</span>
              </button>

              <button
                className="btn btn-secondary btn-lg"
                onClick={handleBuyNow}
              >
                <span>Instant Buy Now</span>
              </button>
            </div>

            {/* Quick Guarantees */}
            <div style={{ borderTop: '1px solid var(--color-surface-container-high)', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-on-surface-variant)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--color-success)', fontSize: '1.1rem' }}>
                  check
                </span>
                <span>{product.category === 'oils' ? 'Cold-pressed below 38°C in traditional Lakdi Ghani' : 'Milled under 40°C in natural stone chakki'}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--color-success)', fontSize: '1.1rem' }}>
                  check
                </span>
                <span>0% Hexane chemical solvents &bull; 0% Preservatives</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--color-success)', fontSize: '1.1rem' }}>
                  check
                </span>
                <span>Bottled in UV-protective amber glass / eco-kraft packaging</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed In-Depth Information */}
        <div
          style={{
            backgroundColor: 'var(--color-surface-container-low)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(1.5rem, 3vw, 2.5rem)',
            border: '1px solid var(--color-outline-variant)',
            marginBottom: '4rem'
          }}
        >
          {/* Tab Navigation */}
          <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '1px solid var(--color-outline-variant)', paddingBottom: '0.8rem', marginBottom: '1.8rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveTab('benefits')}
              style={{
                padding: '0.5rem 1.2rem',
                fontSize: '0.9rem',
                fontWeight: 600,
                borderRadius: 'var(--radius-sm)',
                backgroundColor: activeTab === 'benefits' ? 'var(--color-primary)' : 'transparent',
                color: activeTab === 'benefits' ? '#fff' : 'var(--color-primary)'
              }}
            >
              Benefits &amp; Purity
            </button>
            <button
              onClick={() => setActiveTab('nutrition')}
              style={{
                padding: '0.5rem 1.2rem',
                fontSize: '0.9rem',
                fontWeight: 600,
                borderRadius: 'var(--radius-sm)',
                backgroundColor: activeTab === 'nutrition' ? 'var(--color-primary)' : 'transparent',
                color: activeTab === 'nutrition' ? '#fff' : 'var(--color-primary)'
              }}
            >
              Nutritional Facts
            </button>
            <button
              onClick={() => setActiveTab('origin')}
              style={{
                padding: '0.5rem 1.2rem',
                fontSize: '0.9rem',
                fontWeight: 600,
                borderRadius: 'var(--radius-sm)',
                backgroundColor: activeTab === 'origin' ? 'var(--color-primary)' : 'transparent',
                color: activeTab === 'origin' ? '#fff' : 'var(--color-primary)'
              }}
            >
              Farm Origin &amp; Milling
            </button>
            <button
              onClick={() => setActiveTab('usage')}
              style={{
                padding: '0.5rem 1.2rem',
                fontSize: '0.9rem',
                fontWeight: 600,
                borderRadius: 'var(--radius-sm)',
                backgroundColor: activeTab === 'usage' ? 'var(--color-primary)' : 'transparent',
                color: activeTab === 'usage' ? '#fff' : 'var(--color-primary)'
              }}
            >
              Ayurvedic Usage Guide
            </button>
          </div>

          {/* Tab Contents */}
          {activeTab === 'benefits' && (
            <div>
              <h3 style={{ marginBottom: '1rem' }}>Purity &amp; Wellness Highlights</h3>
              <p style={{ marginBottom: '1.5rem', lineHeight: 1.7 }}>
                {product.description}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                {product.benefits?.map((b, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.6rem',
                      backgroundColor: 'var(--color-surface)',
                      padding: '1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-outline-variant)'
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ color: 'var(--color-secondary)', fontSize: '1.2rem', marginTop: '2px' }}>
                      verified
                    </span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-on-surface)' }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'nutrition' && (
            <div>
              <h3 style={{ marginBottom: '1rem' }}>Verified Laboratory Nutritional Facts</h3>
              <div style={{ maxWidth: '520px', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-md)', padding: '1.5rem', border: '1px solid var(--color-outline-variant)' }}>
                <div style={{ borderBottom: '2px solid var(--color-primary)', paddingBottom: '0.4rem', marginBottom: '0.8rem', display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                  <span>Nutrient per {product.nutrition?.servingSize || '100g'}</span>
                  <span>Amount</span>
                </div>
                {product.nutrition &&
                  Object.entries(product.nutrition).map(([key, val]) => (
                    <div key={key} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.45rem 0', borderBottom: '1px dashed var(--color-surface-container)', fontSize: '0.9rem', textTransform: 'capitalize' }}>
                      <span>{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>{val}</span>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {activeTab === 'origin' && (
            <div>
              <h3 style={{ marginBottom: '1rem' }}>Traceable Single-Origin Story</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                <div style={{ backgroundColor: 'var(--color-surface)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-outline-variant)' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-subtle)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Harvest Location</div>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-primary)' }}>{product.origin}</div>
                  <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Cultivated by verified heritage farmer families practicing multi-crop soil regeneration.</p>
                </div>

                <div style={{ backgroundColor: 'var(--color-surface)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-outline-variant)' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-subtle)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Milling Method</div>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-secondary)' }}>{product.millingType}</div>
                  <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Controlled low RPM avoids friction burn, keeping vital enzymes alive.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'usage' && (
            <div>
              <h3 style={{ marginBottom: '1rem' }}>Traditional Kitchen &amp; Ayurvedic Advisory</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                <div style={{ backgroundColor: 'var(--color-surface)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-outline-variant)' }}>
                  <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.4rem' }}>Daily Consumption</h4>
                  <p style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>
                    {product.id.includes('alsi')
                      ? 'Consume 1 tablespoon raw every morning on an empty stomach with warm water, or drizzle over warm rotis and salads. Note: Do not use for deep frying to protect delicate Omega-3 bonds.'
                      : product.id.includes('kalonji')
                      ? 'Take 1/2 teaspoon daily mixed with pure honey or warm water to build active immune resistance.'
                      : product.id.includes('almond')
                      ? 'Add 1 teaspoon to warm milk at bedtime for memory and deep sleep, or massage onto skin and hair roots for intense rejuvenation.'
                      : 'Knead flour with lukewarm water and let rest for 20 minutes before rolling out for soft, digestible rotis.'}
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--color-surface)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-outline-variant)' }}>
                  <h4 style={{ color: 'var(--color-secondary)', marginBottom: '0.4rem' }}>Storage Instructions</h4>
                  <p style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>
                    Store in a cool, dark pantry away from direct sunlight. Reseal the cork or pouch firmly after each pour. Best consumed within 6 months of fresh cold extraction.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Related Staples */}
        {related.length > 0 && (
          <div>
            <h3 style={{ marginBottom: '1.5rem' }}>Complementary Heritage Staples</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {related.map((p) => (
                <ProductCard key={p.id} product={p} onSelectProduct={onSelectProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
