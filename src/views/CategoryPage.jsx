'use client';
import {useState} from 'react';
import Link from 'next/link';
import {products,categories} from '../data/products';
import {collections,belongsToCollection} from '../lib/collections';
import {ProductCard} from '../components/ProductCard';
import {ProductImage} from '../components/ProductImage';
import {ProductRow} from '../components/ProductRow';
import {DeliveryDetails} from '../components/DeliveryDetails';
import {CollectionVideoBanner} from '../components/CollectionVideoBanner';
const collectionBanners={originals:'/images/collections/in-house.webp',oils:'/images/collections/oil-ghee.webp',pulses:'/images/collections/pulses.webp',seeds:'/images/collections/seeds.webp',sweeteners:'/images/collections/sweeteners.webp',grains:'/images/collections/more.webp'};
export function CategoryPage({categoryId='all'}) {
 const cat=categories.find(c=>c.id===categoryId);
 const banner=collectionBanners[categoryId]||cat?.banner;
 const hasVideo=['all','attas'].includes(categoryId);
 const [sort,setSort]=useState('featured'),[query,setQuery]=useState(''),[group,setGroup]=useState('all');
 const items=products.filter(p=>belongsToCollection(p,categoryId));
 const groups=[...new Set(items.map(p=>p.group))].sort((a,b)=>Number(a==='More')-Number(b==='More'));
 const visible=items.filter(p=>(group==='all'||p.group===group)&&`${p.name} ${p.group}`.toLowerCase().includes(query.trim().toLowerCase())).sort((a,b)=>{
  if(sort==='name')return a.name.localeCompare(b.name);
  if(sort==='featured')return 0;
  const ap=Math.min(...a.sizes.map(s=>s.price??Infinity)),bp=Math.min(...b.sizes.map(s=>s.price??Infinity));
  if(ap===bp)return 0;if(ap===Infinity)return 1;if(bp===Infinity)return -1;
  return sort==='low'?ap-bp:bp-ap;
 });
 const title=cat?.name||(categoryId==='originals'?'In House':'More to discover');
 const rows=['all','originals'].includes(categoryId);
 return <div>
  <section className={`category-hero ${hasVideo?'category-hero-with-video':''} ${banner||hasVideo?'':'catalog-intro'}`}><div className="container category-hero-grid"><div><Link className="back-link" href="/">← Home</Link><span className="eyebrow">{categoryId==='originals'?'Oil & Ghee · Atta · Spices':'Browse our collections'}</span><h1>{title}</h1><p>{cat?.tagline||(categoryId==='originals'?'Jain Desi & Pure — In House & Chemical Free. Explore our own collection of oils, ghee, atta and spices.':'Discover everyday staples and enquire directly with our Noida store.')}</p><Link className="text-link" href="/contact">Delivery details →</Link></div>{hasVideo?<CollectionVideoBanner categoryId={categoryId}/>:banner&&<ProductImage src={banner} alt={`${title} collection`} className={collectionBanners[categoryId]?'collection-banner-media':''} sizes="(max-width: 820px) 90vw, 50vw"/>}</div></section>
  <section className="section catalog-section"><div className="container">
   <nav className="collection-tabs" aria-label="Product collections"><Link href="/shop" aria-current={categoryId==='all'?'page':undefined}>All products</Link><Link href="/shop/originals" aria-current={categoryId==='originals'?'page':undefined}>In House</Link>{collections.map(c=><Link key={c.id} href={`/shop/${c.id}`} aria-current={categoryId===c.id?'page':undefined}>{c.name}</Link>)}</nav>
   <div className="catalog-controls"><label>Find a product<input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search this collection"/></label><label>Type<select value={group} onChange={e=>setGroup(e.target.value)}><option value="all">All types</option>{groups.map(g=><option key={g}>{g}</option>)}</select></label><label>{rows?'Sort each collection':'Sort by'}<select value={sort} onChange={e=>setSort(e.target.value)}><option value="featured">Featured</option><option value="name">Name: A–Z</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></label></div>
   <p className="catalog-count" aria-live="polite">{visible.length} products · Select a pack to see its price</p>
   {visible.length?(rows?collections.map(c=>{const row=visible.filter(p=>belongsToCollection(p,c.id));return row.length?<ProductRow key={c.id} collection={c} products={row}/>:null;}):<div className="products-grid">{visible.map(p=><ProductCard key={p.id} product={p}/>)}</div>):<div className="catalog-empty" role="status"><h2>No products found</h2><p>Try another name or type.</p><button className="btn btn-primary" onClick={()=>{setQuery('');setGroup('all');}}>Clear filters</button></div>}
   <DeliveryDetails/>
  </div></section>
 </div>;
}
