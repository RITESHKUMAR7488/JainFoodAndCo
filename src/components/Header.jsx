import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';

export const Header = ({ currentView, setCurrentView, selectedCategory, setSelectedCategory }) => {
  const { totalItemCount, setIsCartOpen, setIsSearchOpen } = useCart();
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [open]);

  const go = (view, category) => {
    setCurrentView(view);
    if (category) { setSelectedCategory(category); window.location.hash = `/category/${category}`; }
    else window.location.hash = view === 'home' ? '' : `/${view}`;
    setOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const links = [
    ['Attas', 'category', 'attas'], ['Spices', 'category', 'spices'], ['Oils', 'category', 'oils'],
    ['Our process', 'process'], ['Farmers', 'farmers'], ['Purity', 'certifications']
  ];
  return <>
    <div className="announcement"><span>Free delivery above ₹999</span><span className="announcement-detail">Small-batch • Stone-ground • Cold-pressed</span></div>
    <header className="site-header">
      <div className="container header-inner">
        <button className="brand" onClick={() => go('home')} aria-label="Go to homepage">
          <img src="/logo.svg" alt=""/><span><b>Jain Desi &amp; Pure</b><small>Honest food since 1984</small></span>
        </button>
        <nav className={`nav ${open ? 'open' : ''}`} aria-label="Main navigation">
          {links.map(([label, view, category]) => <button key={label} className={(currentView===view && (!category || selectedCategory===category)) ? 'active' : ''} onClick={() => go(view, category)}>{label}</button>)}
        </nav>
        <div className="header-actions">
          <button className="icon-btn" onClick={() => setIsSearchOpen(true)} aria-label="Search"><span className="material-symbols-outlined">search</span></button>
          <button className="cart-button" onClick={() => setIsCartOpen(true)} aria-label={`Basket with ${totalItemCount} items`}><span className="material-symbols-outlined">shopping_bag</span><span className="cart-label">Basket</span>{totalItemCount>0 && <b>{totalItemCount}</b>}</button>
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu"><span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span></button>
        </div>
      </div>
    </header>
  </>;
};
