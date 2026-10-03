'use client';
import {useState} from 'react';
import Link from 'next/link';
import {products,categories} from '../data/products';
import {ProductCard} from '../components/ProductCard';
import {ProductImage} from '../components/ProductImage';
export function CategoryPage({categoryId='all'}) {
 const cat=categories.find(c=>c.id===categoryId);
 const [sort,setSort]=useState('featured'),[query,setQuery]=useState(''),[group,setGroup]=useState('all');
 const items=products.filter(p=>categoryId==='all'||(categoryId==='originals'?p.isOriginal:p.category===categoryId));
 const groups=[...new Set(items.map(p=>p.group))];
 const visible=items.filter(p=>(group==='all'||p.group===group)&&`${p.name} ${p.group}`.toLowerCase().includes(query.trim().toLowerCase())).sort((a,b)=>{
  if(sort==='name')return a.name.localeCompare(b.name);
  if(sort==='featured')return 0;
  const ap=Math.min(...a.sizes.map(s=>s.price??Infinity)),bp=Math.min(...b.sizes.map(s=>s.price??Infinity));
  if(ap===bp)return 0;if(ap===Infinity)return 1;if(bp===Infinity)return -1;
  return sort==='low'?ap-bp:bp-ap;
 });
 const title=cat?.name||(categoryId==='originals'?'Jain Originals':'The full pantry');
 return <div>
  <section className={`category-hero ${cat?.banner?'':'catalog-intro'}`}><div className="container category-hero-grid"><div><Link className="back-link" href="/">← Home</Link><span className="eyebrow">{categoryId==='originals'?'Atta · Spices · Oils':'Browse our collections'}</span><h1>{title}</h1><p>{cat?.tagline||(categoryId==='originals'?'Our own collection of atta, spices and oils, all in one place.':'Discover everyday staples and enquire directly with our Noida store.')}</p><Link className="text-link" href="/contact">Home delivery in Delhi NCR →</Link></div>{cat?.banner&&<ProductImage src={cat.banner} alt={`${title} collection`}/>}</div></section>
  <section className="section catalog-section"><div className="container">
   <nav className="collection-tabs" aria-label="Product collections"><Link href="/shop" aria-current={categoryId==='all'?'page':undefined}>All products</Link><Link href="/originals" aria-current={categoryId==='originals'?'page':undefined}>Originals</Link>{categories.map(c=><Link key={c.id} href={`/shop/${c.id}`} aria-current={categoryId===c.id?'page':undefined}>{c.name}</Link>)}</nav>
   <div className="catalog-controls"><label>Find a product<input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search this collection"/></label><label>Type<select value={group} onChange={e=>setGroup(e.target.value)}><option value="all">All types</option>{groups.map(g=><option key={g}>{g}</option>)}</select></label><label>Sort by<select value={sort} onChange={e=>setSort(e.target.value)}><option value="featured">Featured</option><option value="name">Name: A–Z</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></label></div>
   <p className="catalog-count" aria-live="polite">{visible.length} products · Select a pack to see its price</p>
   {visible.length?<div className="products-grid">{visible.map(p=><ProductCard key={p.id} product={p}/>)}</div>:<div className="catalog-empty" role="status"><h2>No products found</h2><p>Try another name or type.</p><button className="btn btn-primary" onClick={()=>{setQuery('');setGroup('all');}}>Clear filters</button></div>}
  </div></section>
 </div>;
}
