import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export const Footer = ({ onNavigate }) => {
  const { showToast } = useCart();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    showToast('Dhanyawaad! Use code FIRST15 for 15% off your first order.');
    setEmail('');
  };

  return (
    <footer style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-on-primary)', marginTop: 'auto', borderTop: '1px solid var(--color-outline-variant)' }}>
      {/* Purity Guarantee Trust Strip */}
      <div style={{ backgroundColor: '#0d2216', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '2rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '2rem', color: 'var(--color-secondary-container)' }}>
                agriculture
              </span>
              <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>100% Farmer Sourced</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)', maxWidth: '200px' }}>
                Directly from Rajasthan, Gujarat &amp; Maharashtra cooperatives
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '2rem', color: 'var(--color-secondary-container)' }}>
                precision_manufacturing
              </span>
              <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Slow Stone Chakki</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)', maxWidth: '200px' }}>
                Cold-milled below 40°C keeping germ &amp; living nutrients intact
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '2rem', color: 'var(--color-secondary-container)' }}>
                water_drop
              </span>
              <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Artisanal Lakdi Ghani</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)', maxWidth: '200px' }}>
                Wood-mortar pressed oils with zero chemicals or high heat
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '2rem', color: 'var(--color-secondary-container)' }}>
                verified_user
              </span>
              <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Zero Adulteration</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)', maxWidth: '200px' }}>
                Every single batch tested for pesticides, heavy metals &amp; potency
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div style={{ padding: '4rem 0 3rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem' }}>
            {/* Column 1: Brand Info */}
            <div style={{ gridColumn: 'span 1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem', cursor: 'pointer' }} onClick={() => onNavigate('home')}>
                <img src="/logo.svg" alt="Jain Desi & Pure" style={{ height: '48px', filter: 'brightness(0) invert(1)' }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>Jain Desi &amp; Pure</div>
                  <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-secondary-container)' }}>Honest Heritage &bull; 1984</div>
                </div>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                A legacy of honest Indian nourishment. Preserving indigenous stone-milling and cold-press extraction to give modern homes uncompromised purity.
              </p>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <span className="badge-seal" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>
                  FSSAI #10020012000543
                </span>
              </div>
            </div>

            {/* Column 2: Pure Staples */}
            <div>
              <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Our Harvests
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
                <li>
                  <button onClick={() => onNavigate('category', 'attas')} style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'left' }}>
                    Stone-Ground Khapli Atta
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('category', 'attas')} style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'left' }}>
                    Black Wheat Flour
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('category', 'attas')} style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'left' }}>
                    Summer Multigrain Blend
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('category', 'spices')} style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'left' }}>
                    Salem High-Curcumin Haldi
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('category', 'spices')} style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'left' }}>
                    Mathania Sun-Dried Chilli
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('category', 'oils')} style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'left' }}>
                    Lakdi Ghani Mustard &amp; Peanut Oil
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Authenticity & Heritage */}
            <div>
              <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                The Heritage
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
                <li>
                  <button onClick={() => onNavigate('process')} style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'left' }}>
                    Our Slow-Chakki Process
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('farmers')} style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'left' }}>
                    Farmer Cooperative Stories
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('certifications')} style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'left' }}>
                    Laboratory Test Reports
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('certifications')} style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'left' }}>
                    Batch Purity Tracker
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('home')} style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'left' }}>
                    Since 1984 Legacy
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter & Community */}
            <div>
              <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Fresh Harvest Dispatch
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', marginBottom: '1rem' }}>
                Subscribe to receive seasonal harvest bulletins, traditional Indian recipes, and 15% off your first purchase.
              </p>

              {subscribed ? (
                <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.8rem', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', color: 'var(--color-secondary-container)' }}>
                  Dhanyawaad! Use promo code <strong>FIRST15</strong> at checkout.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      color: '#fff',
                      fontSize: '0.88rem'
                    }}
                  />
                  <button type="submit" className="btn btn-secondary btn-sm" style={{ width: '100%' }}>
                    Claim 15% Voucher
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Bottom Copyright */}
          <div style={{ marginTop: '3.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
            <div>
              &copy; {new Date().getFullYear()} Jain Desi &amp; Pure Food Co. Crafted with honest dedication to Indian heritage.
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <span>Non-GMO</span>
              <span>100% Stone-Ground</span>
              <span>No Bleach / Preservatives</span>
              <span>Cold-Pressed Kolhu</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
