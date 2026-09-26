import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export const Header = ({ currentView, setCurrentView, selectedCategory, setSelectedCategory }) => {
  const { totalItemCount, setIsCartOpen, setIsSearchOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateTo = (view, category = null) => {
    setCurrentView(view);
    if (category) {
      setSelectedCategory(category);
    }
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="announcement-bar">
        <span>
          <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>local_shipping</span>
          Free delivery on orders above ₹999 across India
        </span>
        <span className="hidden md:inline">|</span>
        <span className="hidden md:inline">
          <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>verified</span>
          100% Traditional Stone-Ground & Cold-Pressed
        </span>
      </div>

      {/* Main Sticky Header */}
      <header className="site-header">
        <div className="container">
          <div className="header-inner">
            {/* Logo */}
            <div className="brand-logo-wrap" onClick={() => navigateTo('home')}>
              <img src="/logo.svg" alt="Jain Desi & Pure" className="brand-logo-img" />
              <div>
                <div className="brand-name">Jain Desi &amp; Pure</div>
                <div className="brand-sub">Honest Heritage &bull; Est. 1984</div>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav>
              <ul className="nav-links">
                <li>
                  <button
                    className={`nav-link ${currentView === 'home' ? 'active' : ''}`}
                    onClick={() => navigateTo('home')}
                  >
                    Our Story
                  </button>
                </li>
                <li>
                  <button
                    className={`nav-link ${currentView === 'category' && selectedCategory === 'attas' ? 'active' : ''}`}
                    onClick={() => navigateTo('category', 'attas')}
                  >
                    Stone-Ground Attas
                  </button>
                </li>
                <li>
                  <button
                    className={`nav-link ${currentView === 'category' && selectedCategory === 'spices' ? 'active' : ''}`}
                    onClick={() => navigateTo('category', 'spices')}
                  >
                    Pure Spices
                  </button>
                </li>
                <li>
                  <button
                    className={`nav-link ${currentView === 'category' && selectedCategory === 'oils' ? 'active' : ''}`}
                    onClick={() => navigateTo('category', 'oils')}
                  >
                    Cold-Pressed Oils
                  </button>
                </li>
                <li>
                  <button
                    className={`nav-link ${currentView === 'process' ? 'active' : ''}`}
                    onClick={() => navigateTo('process')}
                  >
                    Our Process
                  </button>
                </li>
                <li>
                  <button
                    className={`nav-link ${currentView === 'farmers' ? 'active' : ''}`}
                    onClick={() => navigateTo('farmers')}
                  >
                    Farmer Stories
                  </button>
                </li>
                <li>
                  <button
                    className={`nav-link ${currentView === 'certifications' ? 'active' : ''}`}
                    onClick={() => navigateTo('certifications')}
                  >
                    Certifications
                  </button>
                </li>
              </ul>
            </nav>

            {/* Header Action Buttons */}
            <div className="header-actions">
              <button
                className="icon-btn"
                title="Search Products (Ctrl+/)"
                onClick={() => setIsSearchOpen(true)}
              >
                <span className="material-symbols-outlined">search</span>
              </button>

              <button
                className="icon-btn"
                title="View Cart"
                onClick={() => setIsCartOpen(true)}
              >
                <span className="material-symbols-outlined">shopping_bag</span>
                {totalItemCount > 0 && <span className="cart-counter">{totalItemCount}</span>}
              </button>

              <button
                className="btn btn-primary btn-sm"
                onClick={() => setIsCartOpen(true)}
              >
                <span>Cart</span>
                <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>shopping_cart</span>
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                className="icon-btn mobile-nav-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation"
              >
                <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="modal-overlay"
          style={{ zIndex: 200, justifyContent: 'flex-start' }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="mobile-menu-drawer open"
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-outline-variant)', paddingBottom: '1rem' }}>
              <div className="brand-logo-wrap" onClick={() => navigateTo('home')}>
                <img src="/logo.svg" alt="Jain Desi & Pure" style={{ height: '40px' }} />
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--color-primary)' }}>Jain Desi &amp; Pure</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--color-secondary)' }}>Heritage &bull; Purity</div>
                </div>
              </div>
              <button onClick={() => setMobileMenuOpen(false)}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '0.5rem' }}>
              <button
                style={{ textAlign: 'left', padding: '0.6rem 0', fontWeight: 600, fontSize: '1rem', color: currentView === 'home' ? 'var(--color-secondary)' : 'var(--color-primary)' }}
                onClick={() => navigateTo('home')}
              >
                Our Story (Home)
              </button>
              <button
                style={{ textAlign: 'left', padding: '0.6rem 0', fontWeight: 600, fontSize: '1rem', color: currentView === 'category' && selectedCategory === 'attas' ? 'var(--color-secondary)' : 'var(--color-primary)' }}
                onClick={() => navigateTo('category', 'attas')}
              >
                Stone-Ground Attas
              </button>
              <button
                style={{ textAlign: 'left', padding: '0.6rem 0', fontWeight: 600, fontSize: '1rem', color: currentView === 'category' && selectedCategory === 'spices' ? 'var(--color-secondary)' : 'var(--color-primary)' }}
                onClick={() => navigateTo('category', 'spices')}
              >
                Pure Spices
              </button>
              <button
                style={{ textAlign: 'left', padding: '0.6rem 0', fontWeight: 600, fontSize: '1rem', color: currentView === 'category' && selectedCategory === 'oils' ? 'var(--color-secondary)' : 'var(--color-primary)' }}
                onClick={() => navigateTo('category', 'oils')}
              >
                Cold-Pressed Oils
              </button>
              <button
                style={{ textAlign: 'left', padding: '0.6rem 0', fontWeight: 600, fontSize: '1rem', color: currentView === 'process' ? 'var(--color-secondary)' : 'var(--color-primary)' }}
                onClick={() => navigateTo('process')}
              >
                Our Traditional Process
              </button>
              <button
                style={{ textAlign: 'left', padding: '0.6rem 0', fontWeight: 600, fontSize: '1rem', color: currentView === 'farmers' ? 'var(--color-secondary)' : 'var(--color-primary)' }}
                onClick={() => navigateTo('farmers')}
              >
                Farmer Stories &amp; Heritage
              </button>
              <button
                style={{ textAlign: 'left', padding: '0.6rem 0', fontWeight: 600, fontSize: '1rem', color: currentView === 'certifications' ? 'var(--color-secondary)' : 'var(--color-primary)' }}
                onClick={() => navigateTo('certifications')}
              >
                Certifications &amp; Lab Reports
              </button>
            </div>

            <div style={{ marginTop: 'auto', borderTop: '1px solid var(--color-outline-variant)', paddingTop: '1rem' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-subtle)', marginBottom: '0.5rem' }}>
                Need help? Call farmer hotline:
              </div>
              <div style={{ fontWeight: 600, color: 'var(--color-primary)' }}>+91 1800-JAIN-PURE</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
