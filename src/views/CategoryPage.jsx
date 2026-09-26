'use client';
import React,{useState} from 'react';
import {products,categories} from '../data/products';
import {ProductCard} from '../components/ProductCard';
export const CategoryPage=({categoryId,onSelectProduct,onNavigate})=>{
 const cat=categories.find(c=>c.id===categoryId)||categories[0]; const items=products.filter(p=>p.category===cat.id); const [sort,setSort]=useState('featured');
 const sorted=[...items].sort((a,b)=>sort==='low'?a.price-b.price:sort==='high'?b.price-a.price:sort==='rating'?b.rating-a.rating:0);
 const facts=cat.id==='attas'?['Milled on natural stone','Whole-grain nutrition','Fresh-batch packing']:cat.id==='spices'?['Single-origin crops','No artificial colour','Aroma-first grinding']:['Wood-pressed extraction','Unrefined & unbleached','Naturally settled'];
 return <div><section className="category-hero"><div className="container category-hero-grid"><div><button className="back-link" onClick={()=>onNavigate('home')}>← Home</button><span className="eyebrow">The pantry collection</span><h1>{cat.name}</h1><p>{cat.tagline}</p><div className="fact-list">{facts.map(f=><span key={f}><i>✓</i>{f}</span>)}</div></div><img src={cat.banner} alt={`${cat.name} collection`}/></div></section>
 <section className="section"><div className="container"><div className="catalog-bar"><div><h2>{items.length} carefully made staples</h2><p>Choose a product to see origin, sizes and full details.</p></div><label>Sort by<select value={sort} onChange={e=>setSort(e.target.value)}><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option><option value="rating">Top rated</option></select></label></div><div className="products-grid">{sorted.map(p=><ProductCard key={p.id} product={p} onSelectProduct={onSelectProduct}/>)}</div></div></section></div>;
};
