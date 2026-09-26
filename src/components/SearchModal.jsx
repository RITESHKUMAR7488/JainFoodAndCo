'use client';
import React, { useState, useEffect, useRef } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export const SearchModal = ({ onSelectProduct }) => {
  const { isSearchOpen, setIsSearchOpen } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setSearchTerm('');
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const filtered = products.filter((p) => {
    const q = searchTerm.toLowerCase().trim();
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      p.subheading.toLowerCase().includes(q) ||
      p.categoryName.toLowerCase().includes(q) ||
      p.origin.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  });

  const handlePick = (id) => {
    setIsSearchOpen(false);
    onSelectProduct(id);
  };

  const quickSearches = ['Khapli Atta', 'Turmeric Haldi', 'Mustard Oil', 'Mathania Chilli', 'Cumin Jeera', 'Barley Multigrain'];

  return (
    <div className="modal-overlay" onClick={() => setIsSearchOpen(false)}>
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        <div className="search-bar-header">
          <span className="material-symbols-outlined" style={{ color: 'var(--color-primary)' }}>
            search
          </span>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search stone-ground flours, pure spices, cold-pressed oils..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              style={{ color: 'var(--color-outline)', display: 'flex' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '1.2rem' }}>
                clear
              </span>
            </button>
          )}
          <button className="icon-btn" onClick={() => setIsSearchOpen(false)} aria-label="Close Search">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Quick Suggestions Chips */}
        <div
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: 'var(--color-surface-container-low)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            flexWrap: 'wrap',
            borderBottom: '1px solid var(--color-surface-container)'
          }}
        >
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-subtle)' }}>
            Popular:
          </span>
          {quickSearches.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSearchTerm(tag.split(' ')[0])}
              style={{
                fontSize: '0.75rem',
                padding: '0.2rem 0.6rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-outline-variant)',
                color: 'var(--color-primary)'
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="search-results">
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '2.5rem', color: 'var(--color-outline)' }}>
                search_off
              </span>
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                No pure staples found matching "<strong>{searchTerm}</strong>".
              </p>
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                className="search-result-item"
                onClick={() => handlePick(item.id)}
              >
                <img src={item.image} alt={item.name} className="search-result-img" />
                <div style={{ flexGrow: 1 }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', fontWeight: 600, textTransform: 'uppercase' }}>
                    {item.categoryName}
                  </div>
                  <div style={{ fontWeight: 600, color: 'var(--color-primary)', fontSize: '0.95rem' }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-subtle)' }}>
                    From {item.origin}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 700, fontFamily: 'var(--font-serif)', color: 'var(--color-primary)' }}>
                    ₹{item.price}
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', fontWeight: 600 }}>
                    View &rarr;
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
