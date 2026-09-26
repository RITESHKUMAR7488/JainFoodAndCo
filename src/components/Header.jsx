'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';

export const Header = () => {
  const { totalItemCount, setIsCartOpen, setIsSearchOpen } = useCart();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [open]);
  const links = [['Attas','/shop/attas'],['Spices','/shop/spices'],['Oils','/shop/oils'],['Our process','/our-process'],['Farmers','/farmers'],['Purity','/purity']];
  const go = (href) => { setOpen(false); router.push(href); };
  return <>
    <div className="announcement"><span>Free delivery above ₹999</span><span className="announcement-detail">Small-batch • Stone-ground • Cold-pressed</span></div>
    <header className="site-header"><div className="container header-inner">
      <Link className="brand" href="/" onClick={()=>setOpen(false)}><img src="/logo.svg" alt=""/><span><b>Jain Desi &amp; Pure</b><small>Honest food since 1984</small></span></Link>
      <nav className={`nav ${open?'open':''}`} aria-label="Main navigation">{links.map(([label,href])=><button key={href} className={pathname===href?'active':''} onClick={()=>go(href)}>{label}</button>)}</nav>
      <div className="header-actions">
        <button className="icon-btn" onClick={()=>setIsSearchOpen(true)} aria-label="Search"><span className="material-symbols-outlined">search</span></button>
        <button className="cart-button" onClick={()=>setIsCartOpen(true)} aria-label={`Basket with ${totalItemCount} items`}><span className="material-symbols-outlined">shopping_bag</span><span className="cart-label">Basket</span>{totalItemCount>0&&<b>{totalItemCount}</b>}</button>
        <button className="menu-btn" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle menu"><span className="material-symbols-outlined">{open?'close':'menu'}</span></button>
      </div>
    </div></header>
  </>;
};
