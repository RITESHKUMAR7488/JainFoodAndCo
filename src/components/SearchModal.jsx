'use client';
import {useEffect,useRef,useState} from 'react';
import Link from 'next/link';
import {priceText} from '../data/products';
import {ProductImage} from './ProductImage';
import {searchProducts} from '../lib/productSearch';
export function SearchModal({onClose,initialQuery=''}) {
 const ref=useRef(null),inputRef=useRef(null),[query,setQuery]=useState(initialQuery);
 useEffect(()=>{const dialog=ref.current,opener=document.activeElement;dialog.showModal();inputRef.current.focus();return()=>{dialog.close();if(opener instanceof HTMLElement&&opener.isConnected)opener.focus();};},[]);
 const filtered=searchProducts(query);
 return <dialog ref={ref} className="catalog-search" aria-labelledby="search-title" onCancel={onClose} onKeyDown={e=>{if(e.key==='Escape'){e.preventDefault();onClose();}}} onClick={e=>{if(e.target===ref.current)onClose();}}>
  <div className="search-dialog-header"><h2 id="search-title">More to discover</h2><button className="icon-btn" onClick={onClose} aria-label="Close search">×</button></div>
  <label className="search-field">Product name or collection<input ref={inputRef} type="search" placeholder="Try jeera, khapli, ghee…" value={query} onChange={e=>setQuery(e.target.value)}/></label>
  <p className="catalog-count" aria-live="polite">{filtered.length} products found</p>
  <div className="search-results">{filtered.map(p=><Link key={p.id} className="search-result-item" href={`/product/${p.id}`} onClick={onClose}><ProductImage className="search-result-img" src={p.image} alt={p.name}/><span><small>{p.categoryName}</small><strong>{p.name}</strong></span><span>{priceText(p.price)} →</span></Link>)}{!filtered.length&&<p className="catalog-empty">No matches. Try a different product name.</p>}</div>
 </dialog>;
}
