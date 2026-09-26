'use client';
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
export const Footer = ({ onNavigate }) => {
 const {showToast}=useCart(); const [email,setEmail]=useState('');
 const submit=e=>{e.preventDefault(); if(!email)return; showToast('Welcome to the harvest list — your 15% code is FIRST15.');setEmail('');};
 return <footer className="footer"><div className="container footer-grid">
  <div className="footer-brand"><button onClick={()=>onNavigate('home')}><img src="/logo.svg" alt=""/><span>Jain Desi &amp; Pure</span></button><p>Traditional staples, made slowly and sourced with care for modern Indian kitchens.</p></div>
  <div><h4>Shop</h4><button onClick={()=>onNavigate('category','attas')}>Stone-ground attas</button><button onClick={()=>onNavigate('category','spices')}>Pure spices</button><button onClick={()=>onNavigate('category','oils')}>Cold-pressed oils</button></div>
  <div><h4>Discover</h4><button onClick={()=>onNavigate('process')}>Our process</button><button onClick={()=>onNavigate('farmers')}>Farmer stories</button><button onClick={()=>onNavigate('certifications')}>Purity promise</button></div>
  <div><h4>Harvest notes</h4><p>Seasonal recipes and first access to fresh batches.</p><form onSubmit={submit}><input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email address" required/><button className="btn btn-light">Join</button></form></div>
 </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Jain Desi &amp; Pure</span><span>Made with respect for grain, soil and craft.</span></div></footer>;
};
