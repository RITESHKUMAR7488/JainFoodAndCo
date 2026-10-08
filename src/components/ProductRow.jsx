'use client';
import {useEffect,useRef,useState} from 'react';
import Link from 'next/link';
import {ProductCard} from './ProductCard';
export function ProductRow({collection,products}) {
 const ref=useRef(null),[edges,setEdges]=useState({start:true,end:false});
 useEffect(()=>{const row=ref.current;const update=()=>setEdges({start:row.scrollLeft<=5,end:row.scrollLeft+row.clientWidth>=row.scrollWidth-2});update();row.addEventListener('scroll',update,{passive:true});const observer=new ResizeObserver(update);observer.observe(row);return()=>{row.removeEventListener('scroll',update);observer.disconnect();};},[products]);
 function move(direction){const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;ref.current?.scrollBy({left:direction*ref.current.clientWidth*.85,behavior:reduced?'instant':'smooth'});}
 return <section className="product-collection-row" aria-labelledby={`row-${collection.id}`}><div className="section-head"><div><h2 id={`row-${collection.id}`}>{collection.name}</h2><p>{products.length} products</p></div><div className="row-actions"><Link className="text-link" href={`/shop/${collection.id}`}>View collection →</Link><button disabled={edges.start} onClick={()=>move(-1)} aria-label={`Scroll ${collection.name} left`}>←</button><button disabled={edges.end} onClick={()=>move(1)} aria-label={`Scroll ${collection.name} right`}>→</button></div></div><div ref={ref} className="product-scroll" tabIndex={0} role="region" aria-label={`${collection.name} products, scroll horizontally`} onKeyDown={e=>{if(e.target!==e.currentTarget)return;if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();move(e.key==='ArrowRight'?1:-1);}}}>{products.map(p=><ProductCard key={p.id} product={p}/>)}</div></section>;
}
